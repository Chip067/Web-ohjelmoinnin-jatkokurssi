import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { KelloComponent } from './kello/kello.component';
import { MaatComponent } from './maat/maat.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    KelloComponent,
    MaatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
