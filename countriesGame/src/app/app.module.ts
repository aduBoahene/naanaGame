import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AllCountriesProvider } from '../providers/all-countries/all-countries';
import { HttpModule} from '@angular/http';
import { PracticePage } from '../pages/practice/practice';
import { WelcomePage } from '../pages/welcome/welcome';
import { SettingsPage } from '../pages/settings/settings';
import { IonicStorageModule } from '@ionic/storage';
import { CountryDetailPage } from '../pages/country-detail/country-detail';
import { AboutPage } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PracticePage,
    WelcomePage,
    SettingsPage,
    CountryDetailPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PracticePage,
    WelcomePage,
    SettingsPage,
    CountryDetailPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AllCountriesProvider
  ]
})
export class AppModule {}
