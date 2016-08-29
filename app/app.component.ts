import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app/main.component.html' 
})
export class AppComponent {
  graphData: Array<number>;
  constructor() {
    this.graphData = [10,20,30,40,60];
  }
}
