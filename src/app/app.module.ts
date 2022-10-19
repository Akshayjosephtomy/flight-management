import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddflightComponent } from './addflight/addflight.component';
import { ViewallflightsComponent } from './viewallflights/viewallflights.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const link:Routes=[
  {
    path:"",component:AddflightComponent
  },
  {
    path:"view",component:ViewallflightsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddflightComponent,
    ViewallflightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(link),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
