import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyPuzzlesDetailPage } from './mypuzzles-detail';

const routes: Routes = [
  {
    path: '',
    component: MyPuzzlesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPuzzlesDetailPageRoutingModule { }
