import { Component, OnInit } from '@angular/core';
import { TrafficLightState} from './traffic-light/traffic-light.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public trafficLightState: TrafficLightState; 
  private trafficLightState$: Observable<number>;
    
  constructor(){
    // traffic light 
    this.trafficLightState = TrafficLightState.undefined;
    this.trafficLightState$ = Observable.interval(2000)
        .map(i => Math.floor(Math.random() * 4));
  }

  ngOnInit() {
    // traffic light 
    this.trafficLightState$.subscribe(state => this.trafficLightState = state);
  }
}
