import { Component, OnInit} from '@angular/core';
import {CommonServiceService} from '../common-service.service'
@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.scss']
})
export class CheckBalanceComponent implements OnInit {
  balanceData:any
  constructor(private commonService:CommonServiceService) {

  }
  ngOnInit() {
     this.commonService.getCheckBalanceData().subscribe(data => {
      this.balanceData = data
    })
  }
   titleCaseWord(word:any) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
}
