import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
ndate;
  constructor() { }

  showTodayDate(){
    let ndate = new date();
    return ndate;
  }
}
