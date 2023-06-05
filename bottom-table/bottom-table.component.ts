import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from '../common-service.service'
@Component({
  selector: 'app-bottom-table',
  templateUrl: './bottom-table.component.html',
  styleUrls: ['./bottom-table.component.scss']
})
export class BottomTableComponent implements OnInit {
  transactionData: any;
  constructor(private commonService:CommonServiceService) {

  }
  ngOnInit() {
    this.commonService.getLastTransactionsData().subscribe(data => {
     this.transactionData = data
   })
 }

}
