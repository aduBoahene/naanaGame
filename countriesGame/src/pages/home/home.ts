import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: any
  limitToTenRnds:any

  oneCountry:any
  correctAnswer:any
  AllAnswers:any

  pAnswerArray:Array<any>=[];
  toBeDisplayed:Array<any>=[]

  constructor(public navCtrl: NavController,public navParams: NavParams, public http: Http,private toastCtrl: ToastController) {
    
  }

  ionViewDidLoad() {
    console.log("user wasnt entered", this.navParams.get('skip'))
    if(this.navParams.get('skip')==true){
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
        this.oneCountry=this.countries[this.limitToTenRnds]


        console.log("one country.capital", this.oneCountry.capital)

        for(let a=1;a<250;a++){
          this.pAnswerArray.push(this.countries[a].capital)
        }

       

        this.correctAnswer=this.oneCountry.capital
        console.log("correct capital", this.correctAnswer)

        this.pAnswerArray.push(this.correctAnswer)
        console.log("list of capitals",this.pAnswerArray )


        

        for(var a = 0;a<4;a++){
          let pRnd = Math.floor((Math.random() * 200) + 1)

          this.toBeDisplayed.push(this.pAnswerArray[pRnd])
         
        }

        this.toBeDisplayed.push(this.correctAnswer)

      });
  }

//loop thru 250 entries and pick 3 capitals into an array

refreshGame(ans){
  console.log("selected ans",ans)

if(ans==this.correctAnswer){
  alert("correct ans")
}else{
  alert("wrong ans")
}

  this.toBeDisplayed=[];
  this.limitToTenRnds = Math.floor((Math.random() * 250) + 1)
  console.log("one country is", this.countries[this.limitToTenRnds])
  this.oneCountry=this.countries[this.limitToTenRnds]


  console.log("one country.capital", this.oneCountry.capital)

  for(let a=1;a<250;a++){
    this.pAnswerArray.push(this.countries[a].capital)
  }

 

  this.correctAnswer=this.oneCountry.capital
  console.log("correct capital", this.correctAnswer)

  this.pAnswerArray.push(this.correctAnswer)
  console.log("list of capitals",this.pAnswerArray )


  

  for(var a = 0;a<4;a++){
    let pRnd = Math.floor((Math.random() * 200) + 1)

    this.toBeDisplayed.push(this.pAnswerArray[pRnd])
   
  }

  this.toBeDisplayed.push(this.correctAnswer)
}

  }






