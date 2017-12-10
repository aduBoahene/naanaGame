import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import { SettingsPage } from '../settings/settings';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: any
  limitToTenRnds: any

  oneCountry: any
  correctAnswer: any
  AllAnswers: any

  pAnswerArray: Array<any> = [];
  toBeDisplayed: Array<any> = []

  score: number = 0
  t: number = 0
  maxNumber = 15

  play:true
  pause:false

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, 
    private toastCtrl: ToastController,
    public str:Storage) {
    //this.timer()
    
  }

  PlayPause(){
    
  }

  goToSettingsPage(){
    this.navCtrl.push(SettingsPage)
  }

  timer() {
    let number = 15 // Get the number from paragraph
    // Called the function in each second
    var interval = setInterval(function () {
      this.t=number--; // Update the value in paragraph
     // this.maxNumber=this.maxNumber-1
      console.log("t", this.t)
      if (number < 0) {
        clearInterval(interval); // If exceeded 100, clear interval
        alert("Game over"); 
      }
    }, 1000); // Run for each second

    this.str.get('hscore').then((hscore) => {
      console.log('Your hscore inside timer', hscore);

      if(this.score>hscore){
        alert("new high score set"+this.score)
      }
    });
  
    this.str.set("hscore", this.score)
    
   

  }

  ionViewDidLoad() {

    this.timer()

    //set high score
    

    console.log("user was entered", this.navParams.get('player'))
    if (this.navParams.get('skip') == true) {
      //make toast
      console.log("show toast")
      this.presentToast()
    }
    this.getAllCountries()
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Player Name wasnt entered hence highScores wont be saved',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  getAllCountries() {
    return this.http.get("https://restcountries.eu/rest/v2/all")
      .map(res => res.json())
      .subscribe(data => {
        this.countries = data
        console.log("list of countries", data)
        console.log("countries from var", this.countries)
        this.limitToTenRnds = Math.floor((Math.random() * 250) + 1)
        console.log("one country is", this.countries[this.limitToTenRnds])
        this.oneCountry = this.countries[this.limitToTenRnds]


        console.log("one country.capital", this.oneCountry.capital)

        for (let a = 1; a < 250; a++) {
          this.pAnswerArray.push(this.countries[a].capital)
        }



        this.correctAnswer = this.oneCountry.capital
        console.log("correct capital", this.correctAnswer)

        this.pAnswerArray.push(this.correctAnswer)
        console.log("list of capitals", this.pAnswerArray)




        for (var a = 0; a < 3; a++) {
          let pRnd = Math.floor((Math.random() * 200) + 1)

          this.toBeDisplayed.push(this.pAnswerArray[pRnd])

        }

        this.toBeDisplayed.push(this.correctAnswer)

      });
  }

  //loop thru 250 entries and pick 3 capitals into an array

  refreshGame(ans) {
    console.log("selected ans", ans)

    if (ans == this.correctAnswer&&ans!=null) {
      alert("correct ans")
      this.score = this.score + 1;
    } else {
      alert("wrong ans")
    }

    this.toBeDisplayed = [];
    this.limitToTenRnds = Math.floor((Math.random() * 250) + 1)
    console.log("one country is", this.countries[this.limitToTenRnds])
    this.oneCountry = this.countries[this.limitToTenRnds]


    console.log("one country.capital", this.oneCountry.capital)

    for (let a = 1; a < 250; a++) {
      this.pAnswerArray.push(this.countries[a].capital)
    }



    this.correctAnswer = this.oneCountry.capital
    console.log("correct capital", this.correctAnswer)

    this.pAnswerArray.push(this.correctAnswer)
    console.log("list of capitals", this.pAnswerArray)




    for (var a = 0; a < 4; a++) {
      let pRnd = Math.floor((Math.random() * 200) + 1)

      this.toBeDisplayed.push(this.pAnswerArray[pRnd])

    }

    this.toBeDisplayed.push(this.correctAnswer)
    this.toBeDisplayed.sort()
  }

}






