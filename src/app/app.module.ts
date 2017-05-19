import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {ProductModule} from './Products/product.module';
import { AppComponent } from './app.component';
import {routing} from './app.route';
import {AlertComponent} from './SharedComponents/Alerts/alert.component';
import {AuthGuard} from './Guards/auth.guards';
import {AlertService} from './CommonServices/alert.service';
import {AuthenticationService} from './CommonServices/authentication.service';
import {LoginComponent} from './Login/login.component';
import {SharedServiceGM} from './CommonServices/shared.service';
import {HeaderComponent} from './SharedComponents/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,    
    LoginComponent,
    HeaderComponent  
  ],
  imports: [
    BrowserModule,   
    FormsModule,
    HttpModule,
    ProductModule,
    routing
  ],
  providers: [AlertService, AuthenticationService, AuthGuard, SharedServiceGM],
  bootstrap: [AppComponent]
})
export class AppModule { }
