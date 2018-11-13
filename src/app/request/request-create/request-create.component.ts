import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  request: Request = new Request();
  constructor(
    private requestsvc: RequestService,
    private router: Router
  ) { }
  save(): void {
    this.requestsvc.add(this.request)
    .subscribe(resp => {
      console.log("resp:", resp);
      this.router.navigateByUrl('/requests/list');
    });
  }
  ngOnInit() {
    this.requestsvc.list()
    .subscribe(resp => {
      console.log("Requests:", resp);
      this.request = resp.data;
    });
  } 
}