import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.css']
})
export class StateWiseComponent implements OnInit {

  public states: any;
  public selectedValue: string;
  public activeCase: string;
  public confirmCase: string;
  public death: string;
  public recover: string;
  public lastUpdate: string;
  public stateName: string;

  @Input() public data;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.data)
    this.states = this.data.statewise.map(state => state.state)
  }

  onChange(e) {
    // console.log(e.value);
    this.stateName = e.value
    this.data.statewise.find(data => {
      if (data.state === e.value) {
        this.activeCase = data.active;
        this.confirmCase = data.confirmed;
        this.death = data.deaths;
        this.recover = data.recovered;
        this.lastUpdate = data.lastupdatedtime;
      }
    })
  }

}
