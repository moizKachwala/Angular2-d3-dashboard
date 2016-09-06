import { Component } from '@angular/core';
import { BarChartModel } from './model/barChartModel';
import {BARCHARTDATA} from './data/barChartData';
import {BARCHARTDATASMALL} from './data/barChartDataSmall';

@Component({
  selector: 'my-app',
  template: `
            <bar-chart [data]="graphData" width="500" height="400">
            </bar-chart>
            
            <bar-chart [data]="graphDataSmall" width="200" height="150">
            </bar-chart>
            `
})

export class AppComponent {
  graphData: BarChartModel[] = [];
  graphDataSmall: BarChartModel[] = [];

  constructor() {
    this.graphData = BARCHARTDATA;
    this.graphDataSmall = BARCHARTDATASMALL;
  }
}
