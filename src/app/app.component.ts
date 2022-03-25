
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from './service/common.service';
import { ServerHTTPService } from './service/server-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HelloWorld';
  @ViewChild('sidenav') sidenav?: MatSidenav;
  public isOpened = false;
  public totalStudents = 0;

  constructor(
    private common: CommonService,
    private serverHttp: ServerHTTPService
  ) {}

  ngOnInit(): void {
  }

  public openLeftSide() {
    this.isOpened = !this.isOpened;
    this.sidenav?.toggle();
  }

  public closeLeftSide() {
    this.isOpened = false;
  }
}