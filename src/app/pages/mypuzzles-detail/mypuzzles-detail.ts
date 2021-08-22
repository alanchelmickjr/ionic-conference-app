import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-mypuzzles-detail',
  templateUrl: 'mypuzzles-detail.html',
  styleUrls: ['./mypuzzles-detail.scss'],
})
export class MyPuzzlesDetailPage {
  mypuzzles: any;

  constructor(
    private dataProvider: ConferenceData,
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const mypuzzlesId = this.route.snapshot.paramMap.get('mypuzzlesId');
      if (data && data.mypuzzles) {
        for (const mypuzzles of data.mypuzzles) {
          if (mypuzzles && mypuzzles.id === mypuzzlesId) {
            this.mypuzzles = mypuzzles;
            break;
          }
        }
      }
    });
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

  async openMyPuzzlesShare(mypuzzles: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + mypuzzles.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + mypuzzles.twitter
            );
            if (
              (window as any).cordova &&
              (window as any).cordova.plugins.clipboard
            ) {
              (window as any).cordova.plugins.clipboard.copy(
                'https://twitter.com/' + mypuzzles.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(mypuzzles: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + mypuzzles.name,
      buttons: [
        {
          text: `Email ( ${mypuzzles.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + mypuzzles.email);
          }
        },
        {
          text: `Call ( ${mypuzzles.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + mypuzzles.phone);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }
}
