import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { BarChart } from './directives/bar-chart/bar-chart.directive';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, DashboardComponent, BarChart],
  bootstrap: [AppComponent]
})
export class AppModule { }
