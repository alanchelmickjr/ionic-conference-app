import { Component, OnInit } from '@angular/core';
import '../../../assets/js/puzzleplay.js';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {

  showSearchbar: boolean;

  constructor() { }

  ngOnInit() { }
}
