import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyPuzzlesListPage } from './mypuzzles-list';
const routes: Routes = [
  {
    path: '',
    component: MyPuzzlesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPuzzlesListPageRoutingModule {}
