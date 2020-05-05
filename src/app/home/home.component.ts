import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../service/covid19.service';
import * as CanvasJS from '../../assets/canvas/canvasjs.min'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: any;
  public states: any;
  public selectedValue: string;
  public activeCase: string;
  public confirmCase: string;
  public death: string;
  public recover: string;
  public lastUpdate: string;
  public chartData: any;

  constructor(private _covid19Service: Covid19Service) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._covid19Service.getIndCovidData().subscribe(
      res => {
        console.log(res),
          this.data = res,
          this.states = res.statewise.map(state => state.state),
          this.chartData =  this.data.statewise.map((d) => {
              return  {"y": +d.active, "label": d.state}
          });
          this.chartData.splice(0,1)
          // console.log(this.chartData)
          this.histogramChart(this.chartData)
          this.circleChart(this.chartData)
      },
      err => console.log(err)
    )
  }

  
  onChange(e) {
    console.log(e.value);
    this.data.statewise.find(data => {
      if (data.state === e.value) {
        this.activeCase = data.active;
        this.confirmCase = data.confirmed;
        this.death = data.deaths;
        this.recover = data.recovered;
        this.lastUpdate = data.lastupdatedtime
      }
    })
  }


  histogramChart(data) {
    let chart = new CanvasJS.Chart("histogram", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Chart of Cases State Wise"
      },
      data: [{
        type: "column",
        dataPoints: data
      }]
    });

    chart.render();
  }


  circleChart(data){
    let chart = new CanvasJS.Chart("pieChart", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Pie Chart "
      },
      data: [{
        type: "pie",
        // showInLegend: true,
        // toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: `{label} - #percent%`,
        dataPoints: data
      }]
    });
      
    chart.render();
  }


}
