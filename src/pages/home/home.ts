import { Component } from '@angular/core';
import { NavController, MenuController, PopoverController } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import {Storage} from "@ionic/storage";
import { HomePopoverPage } from './settingpop/home-popover';
import { AddingPostPage } from './Post/adding-post/adding-post';
import { Auth } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user={
    username:"allade fabien"
  }
  constructor(public navCtrl: NavController,public menuCtrl: MenuController,public auth:Auth,public storage:Storage,public popoverCtrl:PopoverController,private backgroundMode: BackgroundMode) {
    this.storage.get('user').then((user) => {
      this.user=user
    });
  }
  openMenu() {
    this.menuCtrl.open();
  }
  presentPopover(event){
    let popover = this.popoverCtrl.create(HomePopoverPage);
    popover.present({
      ev: event
    });
  }
  addpostpage(){
    this.navCtrl.push(AddingPostPage)
    console.log("fabien")
  }

}
