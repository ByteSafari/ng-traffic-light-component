import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrafficLightComponent, TrafficLightState } from './traffic-light/traffic-light.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
