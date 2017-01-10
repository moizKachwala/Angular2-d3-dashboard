import { Component } from '@angular/core';
import { BarChartModel } from '../../model/barChartModel';
import { BARCHARTDATA } from '../../data/barChartData';
import { BarChartConfig} from '../../directives/bar-chart/bar-chart-config';

@Component({
    selector: 'home',
    templateUrl: './app/components/home/home.component.html'
})

export class HomeComponent {
    graphData: BarChartModel[] = [];
    graphConfig: BarChartConfig;

    constructor() {
        this.graphData = BARCHARTDATA;

        let config = new BarChartConfig();
        config.fill = {
            bar: "orange",
            text: "whitesmoke"
        }

        this.graphConfig = config;
    }
}

