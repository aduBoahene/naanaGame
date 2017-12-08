import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http} from "@angular/http";

/*
  Generated class for the AllCountriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AllCountriesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AllCountriesProvider Provider');
  }


  getAllCountries(){
    return this.http.get("https://restcountries.eu/rest/v2/all")
    
    

  }

}
