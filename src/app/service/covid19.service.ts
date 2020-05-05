import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private _http: HttpClient) { }

  getIndCovidData() {
    return this._http.get<any>("https://api.covid19india.org/data.json");
  }


}
