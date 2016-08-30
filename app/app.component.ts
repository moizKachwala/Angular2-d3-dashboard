import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
            <bar-graph bind-data="graphData" width="230" height="170" >
            </bar-graph>
            `
})
export class AppComponent {
  graphData: Array<number>;
  constructor() {
    this.graphData = [10, 20, 30, 40, 60, 80, 90];
  }
}
