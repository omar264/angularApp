import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import { User } from './_models';
import { Component } from '@angular/core';
import { MyserviceService } from './myservice.myservice';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
todaydate;

  public title = 'application-form-frontend';

    currentUser: User;

    constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private myservice: MyserviceService  ){}

    ngOnInit(){
    this.todaydate = this.myservice.showTodayDate();
    }



        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);


    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
