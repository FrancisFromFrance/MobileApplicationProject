import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Injectable()
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

	newCountryID : string;
	myCountryID : string;
	myMinAge : string;
	newMinAge : string;
	myMaxAge : string;
	newMaxAge : string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage')
	
  }

  ionViewWillEnter() {
  this.storage.get("myCountryID")
	.then((val) => {
	console.log(val);
		this.myCountryID = val
	})
	
	.catch((error) => {
		alert("Error accessing Storage")
		})
		
	this.storage.get("myMinAge")
	.then((val) => {
		this.myMinAge = val
	})
	.catch((error) => {
		alert("Error accessing Storage")
		})	
	this.storage.get("myMaxAge")
	.then((val) => {
		this.myMaxAge = val
	})
	.catch((error) => {
		alert("Error accessing Storage")
		})	
		
	
  }

	cancel() {
	}
	
	saveID() {
		this.myCountryID = this.newCountryID
		this.newCountryID = "";
		this.storage.set("myCountryID", this.myCountryID)
		this.myMinAge = this.newMinAge
		this.newMinAge = "";
		this.storage.set("myMinAge", this.myMinAge)
		this.myMaxAge = this.newMaxAge
		this.newMaxAge = "";
		this.storage.set("myMaxAge", this.myMaxAge)
	}
		
}
