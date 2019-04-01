import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";
import {Http} from '@angular/http';
// import {Api} from './api';
// import {Settings} from './settings';
import 'rxjs/add/operator/map';





@Injectable()
export class Auth {
  isLoggedIn: Boolean;
  user: any;
  constructor(private storage: Storage) {
    this.storage.get('user').then((user) => {
      this.user = user;
      this.isLoggedIn=user
      ?true
      :false;
    });
  }

  login(user) {
    return this.storage.set('user', user).then(() => {
      this.isLoggedIn = true
      this.user = user;
    });
  }
  logout() {
    this.storage.remove('user').then(() => {
      this.isLoggedIn = false;
      this.user = null;
    });
  }
  isAuthenticated() {
    return  this.isLoggedIn;
  }
  getUser() {
    let user=this.user
    return user ;
  }
}
