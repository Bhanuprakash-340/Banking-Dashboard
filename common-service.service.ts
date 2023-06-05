import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http:HttpClient) { }
  checkBalanceURL = 'https://1.api.fy23ey01.careers.ifelsecloud.com/'
  lastTransactionsURL = 'https://2.api.fy23ey01.careers.ifelsecloud.com/'

  getCheckBalanceData() {
   return this.http.get(this.checkBalanceURL)
  }
  getLastTransactionsData() {
    return this.http.get(this.lastTransactionsURL)
  }
}
