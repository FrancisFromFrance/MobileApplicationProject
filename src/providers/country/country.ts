import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the CountryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CountryProvider Provider');
  }
    getCountry(country_id : number): Observable <any> {
  return this.http.get('https://app.sportdataapi.com/api/v1/soccer/countries/' + country_id
  + '?apikey=2169b160-89d3-11ed-9aa5-6f4eb1e0add9&continent=Europe');
  }

}
