import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public age;

  constructor(private common: CommonService) { 
    //this.age là biến mặc định của local
    // common.age là biến global, là nơi lưu trữ biến
    this.age = common.age;
  }

  public tangTuoi(){
    this.common.age++;
    this.age = this.common.age;
    //this.vehicles.push(this.name + ': ' + this.age);
  }

  ngOnInit(): void {
  }

}
