import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PuzzlesPage } from './puzzles';
import { PuzzlesFilterPage } from '../puzzles-filter/puzzles-filter';
import { PuzzlesPageRoutingModule } from './puzzles-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuzzlesPageRoutingModule
  ],
  declarations: [
    PuzzlesPage,
    PuzzlesFilterPage
  ],
  entryComponents: [
    PuzzlesFilterPage
  ]
})
export class PuzzlesModule { }
