import { Component, OnInit } from '@angular/core';
declare var google:any;

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(this.drawChart);
  }
  drawChart(){
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Shopping', 4],
      ['Workspace', 6],
      ['Food',  5],
      ['Entertainment', 8]
    ]);
    var options = {
      pieHole:.6,
      width:450,
      height:180,
      pieSliceText:'none',
      title:"All Expenses",
      slices: {
        0: { color: '#264397' },
        1: { color: '#5594a3' },
        2: {color: '#063b69'},
        3: {color: '#53c4e0'},
      }
     
    }
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }
}
