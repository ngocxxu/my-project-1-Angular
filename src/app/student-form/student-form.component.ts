import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  public id = 0;
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

  constructor(
    private common: CommonService,
    private serverHttps: ServerHTTPService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.serverHttps.getStudents().subscribe((data) => {
    //   //console.log('dataaaa', data);
    //   this.common.setTotalStudents(data.length);
    // });
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

  private createData(){
    const newStudent: any = {};
    for (const control in this.studentForm.controls) {
      newStudent[control] = this.studentForm.controls[control].value;
    }
    return newStudent;
  }

  public SaveAndGoToList() {
    this.serverHttps.addStudents(this.createData()).subscribe((data) => {
      //console.log('addStudents', data);
      this.router.navigate(['students']);
    });
  }

  public SaveAndAddNewStudent() {
    this.serverHttps.addStudents(this.createData()).subscribe((data) => {
      //console.log('addStudents', data);
      this.common.increaseStudent();
      this.studentForm.reset();
    });
  }
}
