import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../service/common.service';
import { ServerHTTPService } from '../service/server-http.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  // public students = [
  //   {
  //     id: 1,
  //     code: 'MSV-01',
  //     gender: 'female',
  //     firstName: 'Bono',
  //     lastName: 'Quach',
  //     dob: '03/04/1997',
  //     email: 'bono@gmail.com',
  //     phone: '123-456-7890',
  //     picture: '',
  //   },
  // ];

  public students: Student[] = [];

  constructor(
    private common: CommonService,
    private serverHttp: ServerHTTPService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData()
  }
  
  private loadData() {
    this.serverHttp.getAllStudents().subscribe((data) => {
      //console.log('dataaaa', data);
      this.students = data;
      this.common.setTotalStudents(data.length);
    });
  }

  public AddStudent() {
    //điều hướng tới trang mong muốn
    this.router.navigate(['student-form', 0]);
  }

  public deleteEachStudent(studentId: any){
    this.serverHttp.deleteStudent(studentId).subscribe((data) => {
      // load lại data sau khi xóa
      this.loadData()
    })
  }

  public editEachStudent(studentId: any){
    // cach 1
    this.router.navigate([`student-form`, studentId])
    // cach 2
    //this.router.navigate([`student-form/${studentId}`])
  }
}
