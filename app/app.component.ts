import { Component } from '@angular/core';
import { BarChartModel } from './model/barChartModel';
import {BARCHARTDATA} from './data/barChartData';
import {BARCHARTDATASMALL} from './data/barChartDataSmall';
import { BarChartConfig} from './directives/bar-chart/bar-chart-config';

@Component({
  selector: 'my-app',
  template: `
            <div class="row">
             <div class="col-lg-12">
                <h3 class="page-header">Angular2 D3 Bar chart</h3>
            </div>

            <div class="col-lg-12">
              <bar-chart [data]="graphData" [config]="graphConfig1" width="600" height="500">
              </bar-chart>
            </div>
           <div class="col-sm-3 col-xs-6">
            <bar-chart [data]="graphDataSmall" [config]="graphConfig1" width="250" height="250">
            </bar-chart>
            </div>
            <div class="col-sm-3 col-xs-6">
            <bar-chart [data]="graphDataSmall" [config]="graphConfig2" width="250" height="250">
            </bar-chart>
            </div>

              <div class="col-sm-3 col-xs-6">
             <bar-chart [data]="graphDataSmall" [config]="graphConfig3" width="250" height="250">
            </bar-chart>
            </div>
            <div>
            </div>  
            `
})

export class AppComponent {
  graphData: BarChartModel[] = [];
  graphDataSmall: BarChartModel[] = [];

  graphConfig1: BarChartConfig;
  graphConfig2: BarChartConfig;
  graphConfig3: BarChartConfig;

  constructor() {
    this.graphData = BARCHARTDATA;
    this.graphDataSmall = BARCHARTDATASMALL;

    let config1 = new BarChartConfig();
    config1.fill = {
      bar: "orange",
      text: "whitesmoke"
    }

    let config2 = new BarChartConfig();
    config2.fill = {
      bar: "deepskyblue",
      text: "whitesmoke"
    }

    let config3 = new BarChartConfig();
    config3.fill = {
      bar: "yellow",
      text: "whitesmoke"
    }

    this.graphConfig1 = config1;
    this.graphConfig2 = config2;
    this.graphConfig3 = config3;
  }
}
