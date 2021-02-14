import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class ManageAccountService {

  constructor(private cookieService: CookieService) { }

  public isLoggedIn(): boolean{
    const tempToken = this.cookieService.get('tokenData');
    if (tempToken !== undefined){
      return true;
    }else{
      return false;
    }
  }

}
