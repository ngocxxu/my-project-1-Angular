import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { ServerHTTPService } from '../service/server-http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private common: CommonService,
    private serverHttp: ServerHTTPService
  ) {}

  ngOnInit(): void {
  }
}
