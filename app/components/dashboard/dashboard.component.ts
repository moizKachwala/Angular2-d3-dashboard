import {Component} from '@angular/core';
import { BarChartModel } from '../../model/barChartModel';
import {BARCHARTDATA} from '../../data/barChartData';
import {BARCHARTDATASMALL} from '../../data/barChartDataSmall';
import { BarChartConfig} from '../../directives/bar-chart/bar-chart-config';

@Component({
    selector: 'dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html'
})

export class DashboardComponent {
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