import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request: Request;
  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  delete(): void {
    this.requestsvc.remove(this.request)
    .subscribe(resp => {
      console.log("Request: ", resp);
      this.router.navigateByUrl('/requests/list');
    })
  }
  submit(): void {
    this.requestsvc.submit(this.request)
    .subscribe(resp => {
      console.log("Request: ", resp);
      this.router.navigateByUrl('/requests/list');
    })
  }
  ngOnInit() {
    // pulls id out of the get route
    let id = this.route.snapshot.params.id;
    // preform a get using the id
    this.requestsvc.get(id)
    .subscribe(resp => {
      console.log("Request: ", resp);
      this.request = resp.data;
    })
  }
}