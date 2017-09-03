import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss']
})
export class TrafficLightComponent implements OnInit {

  private _trafficLightState: TrafficLightState;
  
  @Input() 
  set trafficLightState(state: TrafficLightState) {
    this._trafficLightState = state;
    this.setState();
  } 

  get trafficLightState() : TrafficLightState {
    return this._trafficLightState;
  }

  private isRed: boolean = false;
  private isYellow: boolean = false;
  private isGreen: boolean = false;
  private isUndefined: boolean = true;

  constructor() { }

  ngOnInit() {
    
  }

  private setState() {
    this.resetState();
    switch(this._trafficLightState)
    {
      case TrafficLightState.red:
        this.isRed = true; 
        break;
      case TrafficLightState.yellow:
        this.isYellow = true;
        break;
      case TrafficLightState.green:
        this.isGreen = true;
        break;
      default:
      case TrafficLightState.undefined:
        this.isUndefined = true;
    }
  }

  private resetState() {
    this.isRed = false;
    this.isYellow = false;
    this.isGreen = false;
    this.isUndefined = false;
  }

}

export enum TrafficLightState {
  undefined = 0,
  green = 1,
  yellow = 2,
  red = 3
}
