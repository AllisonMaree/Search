import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';
import {HttpModule} from '@angular/http';

import { TitleComponent} from './title/title.component';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { OptionsMenuComponent } from './options-menu/options-menu.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MainDisplayComponent } from './main-display/main-display.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TopMenuComponent,
    OptionsMenuComponent,
    SearchbarComponent,
    MainDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
