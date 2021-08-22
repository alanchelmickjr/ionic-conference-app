import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MyPuzzlesListPage } from './mypuzzles-list';
import { MyPuzzlesListPageRoutingModule } from './mypuzzles-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MyPuzzlesListPageRoutingModule
  ],
  declarations: [MyPuzzlesListPage],
})
export class MyPuzzlesListModule {}
