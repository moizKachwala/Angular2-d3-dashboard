import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { BarChart } from './directives/bar-chart/bar-chart.directive';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DragComponent } from './components/drag/drag.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, DashboardComponent, BarChart, DragComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
