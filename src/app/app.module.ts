import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthenticationServiceComponent } from './authentication-service/authentication-service.component';
import { MyserviceService } from './myservice.service';
/*import { HttpClientModule } from '@angular/common/http'*/
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationService,
    AuthenticationServiceComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
