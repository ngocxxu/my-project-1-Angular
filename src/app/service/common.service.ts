import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public age = 15;
  public totalStudents = 0;
  public totalStudent$ = new BehaviorSubject<number>(0);

  constructor() { }

  public tangTuoi(){
    this.age++;
    //this.vehicles.push(this.name + ': ' + this.age);
  }

  public setTotalStudents(total: number){
    this.totalStudents = total;
    // next() thông báo cho all nào dùng totalStudents là có số đang dc cập nhật
    this.totalStudent$.next(total);
  }

  public increaseStudent(){
    this.totalStudents++;
    this.totalStudent$.next(this.totalStudents);
  }
}
