import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../service/covid19.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: any;
  public chartData;
  public text = "Active Cases in States"
  public preventSteps = [
    'Clean your hands often. Use soap and water, or an alcohol-based hand rub.',
    'Don’t touch your eyes, nose or mouth.',
    'Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.',
    'Maintain a safe distance from anyone who is coughing or sneezing.',
    'Stay home if you feel unwell.',
    'If you have a fever, a cough, and difficulty breathing, seek medical attention. Call in advance.',
    'Follow the directions of your local health authority.'
  ]

  constructor(private _covid19Service: Covid19Service) { }

  ngOnInit(): void {
    this._covid19Service.getIndCovidData_statewise().subscribe(
      res => {
        this.data = res;
        this.chartData = this.data.statewise.map((d) => {
          return { "y": +d.active, "label": d.state }
        });
        this.chartData.splice(0, 1);
      },
      error => console.log(error)
    )
  }

}
