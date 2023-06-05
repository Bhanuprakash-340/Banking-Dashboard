import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { BottomTableComponent } from './bottom-table/bottom-table.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { DoubleLineChartComponent } from './double-line-chart/double-line-chart.component';
import { MatIconModule } from '@angular/material/icon';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { QuickTransferComponent } from './quick-transfer/quick-transfer.component';
import { LeftMenuBarComponent } from './left-menu-bar/left-menu-bar.component';
import { TopMenuBarComponent } from './top-menu-bar/top-menu-bar.component'


@NgModule({
  declarations: [
    AppComponent,
    CheckBalanceComponent,
    BottomTableComponent,
    DoughnutChartComponent,
    DoubleLineChartComponent,
    MyCardsComponent,
    QuickTransferComponent,
    LeftMenuBarComponent,
    TopMenuBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
