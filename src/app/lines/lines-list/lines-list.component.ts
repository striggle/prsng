import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LinesService } from '../lines.service';
import { Lines } from '../lines.class';
import { RequestService } from '../../request/request.service';
import { Request } from '../../request/request.class';

@Component({
  selector: 'app-lines-list',
  templateUrl: './lines-list.component.html',
  styleUrls: ['./lines-list.component.css']
})
export class LinesListComponent implements OnInit {
  lines: Lines[];
  request: Request;
  constructor(
    private linesvc: LinesService,
    private prsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.linesvc.getPrli(id)
    .subscribe(resp => {
      console.log("Line Items: ", resp);
      this.lines = resp.data;
    });
    this.prsvc.get(id)
    .subscribe(resp => {
      console.log("Requests: ", resp);
      this.request = resp.data;
    })
  }

}