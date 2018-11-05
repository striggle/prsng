
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  delete(): void {
    this.usersvc.remove(this.user)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/users/list');
      });
  }

  constructor(
    private usersvc: UserService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // gets the :id from the router
    let id = this.route.snapshot.params.id;
    // get the user from the user service
    this.usersvc.get(id)
      .subscribe(resp => {
        console.log("resp: ", resp);
        this.user = resp.data;
      });
  }
}