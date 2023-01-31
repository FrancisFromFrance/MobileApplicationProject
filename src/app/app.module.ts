import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SettingsPage} from '../pages/settings/settings';
import {IonicStorageModule} from '@ionic/storage';
import { CountryProvider } from '../providers/country/country';
import { HttpClientModule } from '@angular/common/http';
import { QuoteProvider } from '../providers/quote/quote';
import { FlagProvider } from '../providers/flag/flag';
import { PlayerProvider } from '../providers/player/player';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
	SettingsPage
  ],
  imports: [
   BrowserModule,
    IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot(),
	HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	 CountryProvider,
    QuoteProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FlagProvider,
    PlayerProvider
 
  ]
})


export class AppModule {}
