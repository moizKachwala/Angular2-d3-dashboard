import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { BarGraph } from './directives/bar-graph.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, BarGraph],
  bootstrap: [AppComponent]
})
export class AppModule { }
