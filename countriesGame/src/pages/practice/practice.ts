import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import { List } from 'ionic-angular/components/list/list';
import { CountryDetailPage } from '../country-detail/country-detail';

/**
 * Generated class for the PracticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practice',
  templateUrl: 'practice.html',
})
export class PracticePage {

  searchQuery: string = '';
  items: string[] = [];

  countries: object[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) { }

  goToCountryDetail(country){
    this.navCtrl.push(CountryDetailPage,{
      'country':country
    })
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticePage');
    this.getAllCountries()
  }


  getAllCountries() {
    return this.http.get("https://restcountries.eu/rest/v2/all")
      .map(res => res.json())
      .subscribe(data => {
        this.countries = data
        console.log("all countries", this.countries)

        this.countries.forEach(element => {
          this.items.push(element["name"]);
        });
        console.log("all items", this.items)
        // for(let a=0;a<this.countries.length;a++){
        //   console.log("all countries names", this.countries[a].["name"])
        //   this.items.push(this.countries[a].name)
        //   console.log("all items", this.items)
        // }

      });
      
  }



}
