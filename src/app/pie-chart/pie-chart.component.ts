import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as CanvasJS from '../../assets/canvas/canvasjs.min';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {

  @Input() data: any;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.pieChart(this.data)
  }

  pieChart(data) {
    let chart = new CanvasJS.Chart("pieChart", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: `${this.text}`
      },
      data: [{
        type: "pie",
        indexLabel: `{label} - #percent%`,
        dataPoints: data
      }]
    });

    chart.render();
  }

}
