import { Component, OnInit } from '@angular/core';
declare var google:any;

@Component({
  selector: 'app-double-line-chart',
  templateUrl: './double-line-chart.component.html',
  styleUrls: ['./double-line-chart.component.scss']
})
export class DoubleLineChartComponent implements OnInit  {

  constructor(){}

  ngOnInit(): void {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(this.drawChart);
  }
  drawChart(){
    var data = google.visualization.arrayToDataTable([
      ['Monthly', 'Income', 'Outcome'],
          ['01',  500,      700],
          ['05',  2170,      5160],
          ['10',  660,       1120],
          ['15',  1430,      2540],
          ['20',  1030,      1540],
          ['25',  3660,      1560],
          ['30',  5930,      740]
    ]);
    var options = {
      title: 'Finances',
      curveType: 'function',
      height:230,
      legend: { position: 'bottom' }
    }
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
}
}


