import { Component } from '@angular/core';
import {AreaChartConfig} from './directives/bar-chart-svg-config';
@Component({
  selector: 'my-app',
  template: `
            <bar-graph-svg bind-data="graphData">
            </bar-graph-svg>
            `
})
export class AppComponent {
  graphData: Array<AreaChartConfig>;
  constructor() {
    let config = new AreaChartConfig();
    config.settings = {
      fill: 'rgba(1, 67, 163, 1)',
      interpolation: 'monotone'
    };
    config.dataset = [{
      x: 'A',
      y: 10
    }, {
        x: 'B',
        y: 50
      }, {
        x: 'C',
        y: 80
      }];

      this.graphData = new Array<AreaChartConfig>();
      this.graphData.push(config);
  }
}
