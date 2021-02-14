import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from '../../service/login-service.service';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private cookieService: CookieService) {
  }

  email = '';
  password = '';

  ngOnInit(): void {
  }

  loginUser() {
    this.loginService.loginUser(this.email, this.password).subscribe(resp => {
      if (resp.message === 'success') {

        const todayDate = new Date();
        const tomorrow = new Date(todayDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const cookieOption = {
          expires: tomorrow
        };
        this.cookieService.put('tokenData', resp.token, cookieOption);
        alert('Success!');

      } else {
        alert('Please Try Again!');
      }

    }, error => {
      console.log(error);
    });
  }

}
