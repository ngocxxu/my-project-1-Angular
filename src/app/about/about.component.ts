import { Component, OnInit } from '@angular/core';
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

    this.serverHttp.getPost().subscribe((data) => {
      console.log('data', data);
      this.id = data[0].id;
    })
  }
}
