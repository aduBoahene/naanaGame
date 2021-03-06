import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

/**
 * Generated class for the CountryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country-detail',
  templateUrl: 'country-detail.html',
})
export class CountryDetailPage {
  countryName:any

  countries: any;

  toBeDisplayed: object[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryDetailPage');

    console.log('country details',this.navParams.get('country'));

    this.countryName=this.navParams.get('country')

    console.log('country 1',this.countryName);
    this.getAllCountries()
  }

  getAllCountries() {
    return this.http.get("https://restcountries.eu/rest/v2/all")
      .map(res => res.json())
      .subscribe(data => {
        this.countries = data

       for(let a=0;a<this.countries.length;a++){
         if(this.countryName==this.countries[a].name){
          console.log("found country details", this.countries[a])
          this.toBeDisplayed=this.countries[a]
          console.log("to be displayed",this.toBeDisplayed)
         }
       }

      });
      
  }

}
