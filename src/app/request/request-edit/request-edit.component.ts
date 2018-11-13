import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  request: Request;

  constructor(
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  save(): void {
    this.requestsvc.add(this.request)
    .subscribe(resp => {
      console.log("resp:", resp);
      this.router.navigateByUrl('/requests/list');
    });
  }
  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id)
    .subscribe(resp => {
      this.request = resp.data
    })
  }

}