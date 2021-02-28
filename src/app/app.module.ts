import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthenticationServiceComponent } from './authentication-service/authentication-service.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationService,
    AuthenticationServiceComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
