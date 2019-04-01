import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddingPostPage } from './adding-post';

@NgModule({
  declarations: [
    AddingPostPage,
  ],
  imports: [
    IonicPageModule.forChild(AddingPostPage),
  ],
})
export class AddingPostPageModule {}
