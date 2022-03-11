import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public name = 'abc';
  public age = 17;
  public vehicles = ['toyota', 'honda'];

  constructor() { }

  public tangTuoi(){
    this.age++;
    //this.vehicles.push(this.name + ': ' + this.age);
  }

  public giamTuoi(){
    this.age--;
  }

  ngOnInit(): void {
  }

}
