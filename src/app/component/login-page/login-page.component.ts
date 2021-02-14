import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from '../../service/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

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
