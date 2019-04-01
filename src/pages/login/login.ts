import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
// import { BackgroundMode } from '@ionic-native/background-mode/ngx';
// import { Observable } from "rxjs/Observable";
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/map";
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { RootPage } from '../root/root';
import { Auth } from '../../providers/auth/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
login={
  username:'',
  password:''
}
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl:AlertController,
    public storage: Storage,
    public auth:Auth
  ) {
  }
  data = {
    logo: "assets/imgs/logo1.png",
    title: "HD",
    subtitle: "Connectez-vous",
    txtUsername: "username",
    txtPassword: "Mot de pass",
    btnLogin: "login",
    txtForgotPassword: "forget",
    btnResetYourPassword: "reset",
    txtSignupnow: "signup",
    btnSignupnow: "now"
  };
  alertMessage(){
    let alert = this.alertCtrl.create({
      title: 'Information!',
      subTitle: 'Cette fonction na pas encore ete develloper!',
      buttons: ['OK']
    });
    alert.present();
  }
logForm(form){
  console.log(this.login)
  if (this.login.username=="" && this.login.password=="") {
    console.log(this.auth.getUser());
  }else{
    this.auth.login(this.login);
    console.log(this.auth.getUser());
    this.navCtrl.setRoot(HomePage);
  }
}
  navigateRegister() {
    this.storage.set('currentUser', 'allade fabien');
    // console.log(this.storage);
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    // Or to get a key/value pair
    console.log("ionViewDidLoad LoginPage");
  }
}
