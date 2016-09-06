import { Component } from '@angular/core';
// import {AreaChartConfig} from './directives/bar-chart-svg-config';
@Component({
  selector: 'my-app',
  template: `
            <bar-chart-simple bind-data="graphData" width="200" height="200">
            </bar-chart-simple>
             <bar-chart-simple bind-data="graphData" width="400" height="200">
            </bar-chart-simple>
             <bar-chart-simple bind-data="graphData" width="500" height="500">
            </bar-chart-simple>
            `
})
export class AppComponent {
   graphData =  [4, 8, 15, 16, 23, 42, 1, 15 ,90, 22, 30, 55, 60];

  // constructor() {
  //   let config = new AreaChartConfig();
  //   config.settings = {
  //     fill: 'rgba(1, 67, 163, 1)',
  //     interpolation: 'monotone'
  //   };
  //   config.dataset = [{
  //     x: 'A',
  //     y: 10
  //   }, {
  //       x: 'B',
  //       y: 50
  //     }, {
  //       x: 'C',
  //       y: 80
  //     }];

  //     this.graphData = new Array<AreaChartConfig>();
  //     this.graphData.push(config);
  // }
}
