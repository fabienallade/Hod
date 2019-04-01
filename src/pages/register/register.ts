import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
register:Object={
  nom:""
};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

submit(){
  console.log(this.register);
}
  navigatePage(pageName:string){
  this.navCtrl.push(pageName);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
