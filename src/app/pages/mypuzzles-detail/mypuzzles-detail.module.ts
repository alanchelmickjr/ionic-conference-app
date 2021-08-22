import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPuzzlesDetailPage } from './mypuzzles-detail';
import { MyPuzzlesDetailPageRoutingModule } from './mypuzzles-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MyPuzzlesDetailPageRoutingModule
  ],
  declarations: [
    MyPuzzlesDetailPage,
  ]
})
export class MyPuzzlesDetailModule { }
