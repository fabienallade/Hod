import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import 'rxjs/add/operator/map';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { HomePage } from '../pages/home/home';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { RootPage } from '../pages/root/root';
import { Auth } from '../providers/auth/auth';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  currentUser:any="";
  authentification:Object={
    auth:''
  }
  rootPage:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage:Storage,private auth: Auth,private backgtoundmode:BackgroundMode) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.backgtoundmode.enable
      console.log(this.backgtoundmode.isEnabled)
      this.storage.get('user').then((user) => {
        console.log(user)
        this.rootPage = user
                        ? HomePage
                        : LoginPage;
      });
    });
  }

}
