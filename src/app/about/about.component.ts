import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../service/common.service';
import { ServerHTTPService } from '../service/server-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public age;
  public id = '';
  public posts = '';
  //public title = '';

  public profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    age: new FormControl(''),
  });

  constructor(
    private common: CommonService,
    private serverHttp: ServerHTTPService
  ) {
    //this.age là biến mặc định của local
    // common.age là biến global, là nơi lưu trữ biến
    this.age = common.age;
  }

  public tangTuoi() {
    this.common.age++;
    this.age = this.common.age;
    //this.vehicles.push(this.name + ': ' + this.age);
  }

  ngOnInit(): void {
    // get dữ liệu từ server
    this.serverHttp.getProfile().subscribe((data) => {
      //console.log('data', data);
      this.age = data.age;
    });

    this.serverHttp.getPosts().subscribe((data) => {
      //console.log('data', data);
      this.posts = data;
      this.id = data[0].id;
    })

  }
    public addMorePost(){
      console.log('dataName', this.profileForm.get('name'));
      //const newData = {title: 'testing'};
      const newData = {title: `${this.profileForm.get('profileForm.name')}`};
      this.serverHttp.addPosts(newData).subscribe((data) => {
        console.log('addPosts', data);
      })
    }
    
    public onSubmit() {
      console.log('dataName', this.profileForm.value.name);
      const newData = {title: `${this.profileForm.value.name}`};
      this.serverHttp.addPosts(newData).subscribe((data) => {
        console.log('addPosts', data);
      })
    }
  
    get name() {
      return this.profileForm.get('name');
    }
  
}
