import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from './app.route';
import {AlertComponent} from './CommonDirective/alert.component';
import {AuthGuard} from './Guards/auth.guards';
import {AlertService} from './CommonServices/alert.service';
import {AuthenticationService} from './CommonServices/authentication.service';
import {ProductService} from './Products/product.service';
import {HomeComponent} from './Home/home.component';
import {LoginComponent} from './Login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AlertService, AuthenticationService, ProductService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
