import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  //public name = new FormControl('');
  public profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    age: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  public updateName() {
    //this.name.setValue('Bono');
  }

  public onSubmit() {
    //console.log(this.profileForm.controls.age.value);
  }

  get name() {
    return this.profileForm.get('name');
  }
}
