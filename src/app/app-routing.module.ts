import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

const routes: Routes = [
  {path: '', redirectTo: '/users/list', pathMatch: 'full'},
  {path: 'users/list', component:UserListComponent},
  {path: 'users/create', component:UserCreateComponent},
  {path: 'users/detail', component:UserDetailComponent},
  {path: 'users/edit', component:UserEditComponent},
  {path: '**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
