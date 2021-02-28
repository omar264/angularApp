import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthenticationServiceComponent } from './authentication-service/authentication-service.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationService,
    RecruiterComponent,
    JobSeekerComponent,
    LoginComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
