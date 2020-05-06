import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private _http: HttpClient) { }

  getIndCovidData_statewise() {
    return this._http.get<any>("https://api.covid19india.org/data.json");
  }

  getIndCovidData_state_district_wise() {
    return this._http.get<any>("https://api.covid19india.org/state_district_wise.json");
  }

}
