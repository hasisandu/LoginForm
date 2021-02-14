import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashBoardComponent} from './component/dash-board/dash-board.component';
import {LoginPageComponent} from './component/login-page/login-page.component';
import {SignUpPageComponent} from './component/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {path: '', component: DashBoardComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'singUp', component: SignUpPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
