import { PlayPageModule } from '../play/play.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { RewardsModule } from '../rewards/rewards.module';
import { PuzzlesModule } from '../puzzles/puzzles.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { MyPuzzlesDetailModule } from '../mypuzzles-detail/mypuzzles-detail.module';
import { MyPuzzlesListModule } from '../mypuzzles-list/mypuzzles-list.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    RewardsModule,
    PuzzlesModule,
    PlayPageModule,
    SessionDetailModule,
    MyPuzzlesDetailModule,
    MyPuzzlesListModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
