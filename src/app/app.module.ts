import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule }   from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login'
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from '../pages/register/register';
import { RootPage } from '../pages/root/root';
import { ApiProvider } from '../providers/api/api';
import { HomePopoverPage } from '../pages/home/settingpop/home-popover';
import { AddingPostPage } from '../pages/home/Post/adding-post/adding-post';
import { Auth } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    RootPage,
    HomePopoverPage,
    AddingPostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    RootPage,
    HomePopoverPage,
    AddingPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackgroundMode,
    Auth,
    ApiProvider
  ]
})
export class AppModule {}
