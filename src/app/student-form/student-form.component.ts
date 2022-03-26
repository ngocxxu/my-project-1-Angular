import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  //public name = new FormControl('');
  public profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    age: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  public updateName() {
    //this.name.setValue('Bono');
  }

  public onSubmit() {
    //console.log(this.profileForm.controls.age.value);
  }
}
