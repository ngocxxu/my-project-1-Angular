import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../service/common.service';
import { ServerHTTPService } from '../service/server-http.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  //public name = new FormControl('');
  public id:any;
  public studentForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.minLength(4)]),
    gender: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    picture: new FormControl(''),
  });
  public student: any;

  constructor(
    private common: CommonService,
    private serverHttps: ServerHTTPService,
    private router: Router,
    // để nhận tham số đầu vào studentID từ URL
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.serverHttps.getStudents().subscribe((data) => {
    //   //console.log('dataaaa', data);
    //   this.common.setTotalStudents(data.length);
    // });

    // nhận dc param ID từ URL khi Edit
    //this.id = +this.route.snapshot.paramMap? this.route.snapshot.paramMap.get('id') : 0;
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }
  private loadData(studentId: number) {
    this.serverHttps.getStudent(studentId).subscribe((data) => {
      //console.log('student', data);
      this.student = data;
      for (const controlName in this.studentForm.controls) {
        if (controlName) {
          this.studentForm.controls[controlName].setValue(data[controlName]);
        }

        // cach 2
        // for (const [key, value] of Object.entries(this.student)) {
        //   //console.log(`${key}: ${value}`);
        //   if(controlName === key){
        //     this.studentForm.controls[controlName].setValue(value);
        //   }
        // }
      }
    });
  }

  public updateName() {
    //this.name.setValue('Bono');
  }

  public onSubmit() {
    const newStudent: any = {};
    //console.log(this.profileForm.controls.age.value);
    for (const controlName in this.studentForm.controls) {
      if (controlName) {
        newStudent[controlName] = this.studentForm.controls[controlName].value;
        //console.log(controlName + ' = ' + this.studentForm.controls[controlName].value)
      }
    }
    //console.log('newStudent',newStudent)
    if (Object.keys(newStudent).length !== 0) {
      this.serverHttps.addStudents(newStudent).subscribe((data) => {
        //console.log('addStudents', data);
        this.router.navigate(['students']);
      });
    } else {
      alert('Please input fulfill your form!');
    }
  }

  private CreateData() {
    const newStudent: any = {};
    for (const control in this.studentForm.controls) {
      newStudent[control] = this.studentForm.controls[control].value;
    }
    return newStudent;
  }

  public SaveAndGoToList() {
    if (this.id > 0) {
      this.serverHttps
        .modifyStudent(this.id, this.CreateData())
        .subscribe((data) => {
          this.router.navigate(['students']);
        });
    } else {
      this.serverHttps.addStudents(this.CreateData()).subscribe((data) => {
        //console.log('addStudents', data);
        this.router.navigate(['students']);
      });
    }
  }

  public SaveAndAddNewStudent() {
    if (this.id > 0) {
      this.serverHttps
        .modifyStudent(this.id, this.CreateData())
        .subscribe((data) => {
          // this.common.increaseStudent();
          alert("You save successfully!");
          this.router.navigate(['students']);
        });
    } else {
      // neu id = 0 là ng mới thì chạy vô hàm bên dưới
      this.serverHttps.addStudents(this.CreateData()).subscribe((data) => {
        //console.log('addStudents', data);
        this.common.increaseStudent();
        this.studentForm.reset();
      });
    }
  }

  public randomStudent(){
    this.serverHttps.getRandomStudent().subscribe(data =>{
      if(data && data.results && data.results.length > 0){
        const student = data.results[0];
        this.studentForm.controls['code'].setValue((student.id.name || "") + "-" + (student.id.value || ""));
        this.studentForm.controls['gender'].setValue(student.gender);
        this.studentForm.controls['firstName'].setValue(student.name.first);
        this.studentForm.controls['lastName'].setValue(student.name.last);
        this.studentForm.controls['dob'].setValue(student.dob.date);
        this.studentForm.controls['email'].setValue(student.email);
        this.studentForm.controls['phone'].setValue(student.phone);
        this.studentForm.controls['picture'].setValue(student.picture.large);

      }
    })
  }
}
