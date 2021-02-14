import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../service/login-service.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  constructor(private loginService: LoginServiceService) {
  }

  email = '';
  password = '';

  ngOnInit(): void {
  }

  registerUser() {
    this.loginService.registerUser(this.email, this.password).subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }

}
