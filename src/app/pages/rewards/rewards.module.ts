import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MapPage } from './rewards';
import { MapPageRoutingModule } from './rewards-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MapPageRoutingModule
  ],
  declarations: [
    MapPage,
  ]
})
export class RewardsModule { }
