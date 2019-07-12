import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';

/**
 * Generated class for the RootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-root',
  templateUrl: 'root.html',
})
export class RootPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:Auth) {
  }
  submit(){
    // console.log(this.firstName)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RootPage');
  }
  openModal(){
    console.log('message');
    this.auth.logout();
  }

}
