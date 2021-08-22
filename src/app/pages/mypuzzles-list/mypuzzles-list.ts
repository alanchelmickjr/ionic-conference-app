import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-mypuzzles-list',
  templateUrl: 'mypuzzles-list.html',
  styleUrls: ['./mypuzzles-list.scss'],
})
export class MyPuzzlesListPage {
  mypuzzles: any[] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getMyPuzzless().subscribe((mypuzzles: any[]) => {
      this.mypuzzles = mypuzzles;
    });
  }
}
