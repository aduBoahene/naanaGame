import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  skipped:boolean=false

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.presentPrompt()
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Enter Player Name',
      inputs: [
        {
          name: 'username',
          placeholder: 'Enter Name'
        }
      ],
      buttons: [
        {
          text: 'Skip',
          handler: data => {
            this.navCtrl.setRoot(HomePage,{
              'skip':this.skipped=true
            })
          }
        },
        {
          text: 'Go',
          handler: data => {
            console.log('Go clicked');
            this.navCtrl.setRoot(HomePage,{
              'player':data.username
            })
            console.log('Go clicked',data.username);
          }
        }
      ]
    });
    alert.present();
  }

}
