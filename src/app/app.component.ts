import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from './service/common.service';
import { ServerHTTPService } from './service/server-http.service';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'HelloWorld';

  // @viewchild tìm kiếm thằng nào có id là sidenav để thực thi
  @ViewChild('sidenav') sidenav?: MatSidenav;
  public isOpened = false;
  public totalStudents = 0;

  constructor(
    private common: CommonService,
    private serverHttp: ServerHTTPService
  ) {}

  ngOnInit(): void {
    this.common.totalStudent$.subscribe((total: number) => {
      this.totalStudents = total;
    });
    this.serverHttp.getAllStudents().subscribe((data) => {
      //console.log('dataaaa', data);
      this.common.setTotalStudents(data.length);
    });
  }

  public openLeftSide() {
    this.isOpened = !this.isOpened;
    this.sidenav?.toggle();
  }

  public closeLeftSide() {
    this.isOpened = false;
  }
}
