import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SettingsPage} from '../settings/settings';
import { Storage } from '@ionic/storage';
//import { HttpClient } from '@angular/core';
import { Injectable } from '@angular/core';
import { QuoteProvider} from '../../providers/quote/quote';
import { CountryProvider} from '../../providers/country/country';
import {FlagProvider} from '../../providers/flag/flag';
import {PlayerProvider } from '../../providers/player/player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage implements OnInit {

cont : string;
author : string;
tags : string;

data : string[];
continent : string;
country_id : string;
name : string;
country_code : string;


  constructor(public navCtrl: NavController, private storage: Storage,
  private quoteProvider: QuoteProvider, private countryProvider : CountryProvider,
  private flagProvider : FlagProvider, private playerProvider : PlayerProvider) {

  }
  OpenSettingsPage(){
  this.navCtrl.push(SettingsPage);
  
  }
	
	ngOnInit(){
	}
	
ionViewDidLoad() {
	console.log("ionViewDidLoad");
	this.quoteProvider.getQuote().subscribe(data => {
		this.author = data.author;
		this.cont = data.content;
		this.tags = data.tags;
		});
	
	
	this.countryProvider.getCountry(23).subscribe(data =>{
	this.continent = data.data.continent;
	this.country_id = data.data.country_id;
	this.name = data.data.name;
	this.country_code = data.data.country_code;

		});
	
	this.playerProvider.getPlayer(23).subscribe(data =>{
	this.data = data.data;
	});
	
		
	
}


}
