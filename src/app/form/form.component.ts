import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public name = '';
  public password = '';
  public vehicles = ['toyota', 'honda'];
  private selectedVehicle = '';

  constructor() {}

  public onSubmit() {
    console.log('name = ' + this.name);
    console.log('name = ' + this.selectedVehicle);
  }

  public selectVehicle(event: any){
    this.selectedVehicle = event.target.value;
  }

  ngOnInit(): void {}
}
