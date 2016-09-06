import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { BarChart } from './directives/bar-chart/bar-chart.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, BarChart],
  bootstrap: [AppComponent]
})
export class AppModule { }
