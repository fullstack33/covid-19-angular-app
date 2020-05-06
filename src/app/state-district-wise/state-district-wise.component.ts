import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Covid19Service } from '../service/covid19.service';

@Component({
  selector: 'app-state-district-wise',
  templateUrl: './state-district-wise.component.html',
  styleUrls: ['./state-district-wise.component.css']
})
export class StateDistrictWiseComponent implements OnInit, OnChanges {

  public district;
  public disData;
  public text;

  constructor(private _covid19Service: Covid19Service) { }

  @Input() name;


  ngOnInit(): void { }

  ngOnChanges() {
    // console.log(this.name)
    this.getDistricts(this.name);
  }

  getDistricts(name) {
    this._covid19Service.getIndCovidData_state_district_wise().subscribe(
      res => {
        console.log(res);
        this.district = res[name]
        // console.log(this.district)
        this.getDistrictData(this.district)
      },
      error => console.log(error)
    )
  }

  getDistrictData(data) {
    let distNames = Object.keys(data.districtData);
    this.disData = distNames.map((name) => {
      return { "label": name, "y": data.districtData[name].active }
    }
    );
    this.text=`Active Cases in ${this.name}`;
  }



}
