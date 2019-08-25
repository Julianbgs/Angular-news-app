import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsService} from './news.service';
import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    DropdownModule.forRoot()
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
