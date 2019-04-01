import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { LoginPage } from '../../login/login';
import { HomePage } from '../home';
import { Auth } from '../../../providers/auth/auth';

/**
 * Generated class for the HomePopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-popover',
  templateUrl:'home-popover.html' ,
})
export class HomePopoverPage {

  constructor(public viewCtrl: ViewController,public alertCtrl: AlertController,public auth:Auth,public navCtrl:NavController) {
  }
  close() {
    this.viewCtrl.dismiss();
  }
deconnect(){
  this.close();
  let confirm = this.alertCtrl.create({
  title: 'Deconnexion',
  message: 'Etes vous sur de vouloir vous deconnecter ???',
  buttons: [
    {
      text: 'NON',
      handler: () => {
        console.log('Disagree clicked');
      }
    },
    {
      text: 'OUI',
      handler: () => {
      this.auth.logout();
      }
    }
  ]
});
confirm.present();

}
}
