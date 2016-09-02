import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { BarGraph } from './directives/bar-graph.directive';
import { BarGraphSvg } from './directives/bar-graph-svg.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, BarGraph, BarGraphSvg],
  bootstrap: [AppComponent]
})
export class AppModule { }
