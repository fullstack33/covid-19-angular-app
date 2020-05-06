import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as CanvasJS from '../../assets/canvas/canvasjs.min';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {

  @Input() data: any;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {

    
  }

  ngOnChanges() {
    this.histogramChart(this.data);
    // this.pieChart(this.data)
  }

  histogramChart(data) {
    let chart = new CanvasJS.Chart("histogram", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: `${this.text}`
      },
      data: [{
        type: "column",
        dataPoints: data
      }]
    });

    chart.render();
  }


}
