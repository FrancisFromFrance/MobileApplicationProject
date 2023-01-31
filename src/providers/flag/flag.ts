import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the FlagProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FlagProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FlagProvider Provider');
  }
    getFlag(country_code : string): Observable <any> {
  return this.http.get('https://flagsapi.com/' + country_code + '/shiny/64.png');
  }
}
