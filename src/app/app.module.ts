import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as wjcCore from 'wijmo/wijmo';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { AngularSplitModule } from 'angular-split';

import { AppComponent } from './app.component';
import { MeCompsComponent } from './components/me-comps/me-comps.component';
import { MeCompsComponentCV } from './components/me-compscv/me-compscv.component';
import { MethodService } from './services/method.service';

@NgModule({
  declarations: [
    AppComponent,
		MeCompsComponent,
		MeCompsComponentCV,
  ],
  imports: [
    BrowserModule,
    WjGridModule,
    FormsModule,
    HttpModule,
	AngularSplitModule,     
  ],
  providers: [
    MethodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule
{
    constructor()
    {     
        // global key for any domain provided by Kurt Sterling from Wijmo
        wjcCore.setLicenseKey("442544222166819#B0xUxpUY82EaLFmMpJlUxoUNWhXaz24RLRkdlNGWvsWTPVjc6FTdNpVRxo7a5cUbLdkaGN7bUVnWDBTRndzdahHS7pXNPBTO9RGaCR4TmNjdi3matRmM4lmR9BnUyM6UalHWTJDN9NlcIxGVE3CWXhkNTVXWuhFc0VXRj96ZSN5UhlkZIBVeodjMy54YWZVUtFGRpBHZZBDb98WYoZWNr3ycWVkUCBlS94WQNhXQ6Jke5A5UzskMrZ5dlBFW7FmWHVGRpBnRZlTQ9NDN9Zmaj9WdIt6YSZ7SD3UW5Y4UXZDUJJ6bkNUNIJmI0IyUiwiIDJTN8YUMBJjI0ICSiwSMyMjN5MDO5UTM0IicfJye#4Xfd5nIzMEMCJiOiMkIsISZy36Qg2Wbql6ViojIOJyebpjIkJHUiwiIxMDNwEDMgkTM4ADOxAjMiojI4J7QiwiIu3Wa4FmcvBncvNEIzJXZ4F6ViojIh94QiwiI9EDO6YTMyIjM4QTNyQDNiojIklkIs4nIxYHOxAjMiojIyVmdiwSZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34zZ54USzgVQ7dnQPpFahVmZys4a78Uby3yN0d4KWJXYC3ERVZHOUNUcOZkeo5kUJRnMYZkav3EajhkN9g7V9tSOW3Wbl3yaEdka9RndEd5TSZkMmh5VJJleapkWHNUNGpGayVkTThXWrEmW98HOuN");                
    }    

}
