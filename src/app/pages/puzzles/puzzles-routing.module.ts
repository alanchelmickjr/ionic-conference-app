import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PuzzlesPage } from './puzzles';

const routes: Routes = [
  {
    path: '',
    component: PuzzlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuzzlesPageRoutingModule { }
