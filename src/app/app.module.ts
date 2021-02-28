import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthenticationServiceComponent } from './authentication-service/authentication-service.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

imports: [
  BrowserModule,
  AppRoutingModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  MatProgressSpinnerModule
], /*from '@angular/material';  */
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
