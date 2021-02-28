import { Injectable } from '@angular/core';
import{ HttpClient } from 'angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public logIn(){
    return this.http.get('http://localhost:9999')
  }

  public logOut(){}

  public signIn(){}
}
