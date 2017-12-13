import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountryDetailPage } from './country-detail';

@NgModule({
  declarations: [
    CountryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CountryDetailPage),
  ],
})
export class CountryDetailPageModule {}
