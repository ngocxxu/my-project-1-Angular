import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public name = 'abc';
  public age;
  public vehicles = ['toyota', 'honda'];

  constructor(private common: CommonService) { 
    this.age = common.age;
  }

  public tangTuoi(){
    this.common.age++;
    this.age = this.common.age;
    //this.vehicles.push(this.name + ': ' + this.age);
  }

  public giamTuoi(){
    this.age--;
  }

  ngOnInit(): void {
  }

}
