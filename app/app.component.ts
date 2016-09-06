import { Component } from '@angular/core';
import { BarChartModel } from './model/barChartModel';
import {BARCHARTDATA} from './data/barChartData';

@Component({
  selector: 'my-app',
  template: `
            <bar-chart bind-data="graphData" width="400" height="400">
            </bar-chart>
            `
})

export class AppComponent {
  graphData: BarChartModel[] = [];

  constructor() {
    this.graphData = BARCHARTDATA;
  }
}
