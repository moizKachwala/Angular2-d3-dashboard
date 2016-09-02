import { Directive, ElementRef, Renderer, Input, Attribute, SimpleChange, OnChanges } from '@angular/core';
import {AreaChartConfig} from './bar-chart-svg-config';
import * as d3 from 'd3';

@Directive({
    selector: 'bar-graph-svg',
    properties: ['data']
})

export class BarGraphSvg implements OnChanges {

    //@Input() config: Array<AreaChartConfig>;
    private data: Array<AreaChartConfig>;  // raw chart data
    private host;
    private svg;
    private margin;
    private width;
    private height;
    private xScale;
    private yScale;
    private xAxis;
    private yAxis;
    private htmlElement: HTMLElement;
    private config: Array<AreaChartConfig>;

    constructor(private elementRef: ElementRef) {
        this.htmlElement = this.elementRef.nativeElement;
        this.host = d3.select(this.elementRef.nativeElement);
    }

    ngOnChanges(data): void {
        this.config = data.data.currentValue;
        if (!this.config || this.config.length === 0) return;
        this.setup();
        this.buildSVG();
        this.populate();
        this.drawXAxis();
        this.drawYAxis();
    }

    /**
   * Basically we get the dom element size and build the container configs
   * also we create the xScale and yScale ranges depending on calculations
   **/
    private setup(): void {
        this.margin = { top: 20, right: 20, bottom: 40, left: 40 };
        this.width = 960 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        
        
        this.xScale = d3.scale.ordinal()
            .rangeRoundBands([0, this.width], .1);
        this.yScale = d3.scale.linear()
            .range([this.height, 0]);
    }

    /**
    * We can now build our SVG element using the configurations we created
    **/
    private buildSVG(): void {
        this.host.html('');
        this.svg = this.host.append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }

    /**
    * Method to create the X Axis, will use Month as tick date format
    * Also assing some classes for CSS Stylimg
    **/
    private drawXAxis(): void {
        this.xAxis = d3.svg.axis().scale(this.xScale)
            .orient("bottom");
        this.svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(this.xAxis);
    }

    /**
    * Method to create the Y Axis, will use numeric values as tick date format
    * Also assing some classes for CSS Stylimg and rotating the axis vertically
    **/
    private drawYAxis(): void {
        this.yAxis = d3.svg.axis().scale(this.yScale)
            .orient('left')
            .tickPadding(10);
        this.svg.append('g')
            .attr('class', 'y axis')
            .call(this.yAxis)
            .append('text')
            .attr('transform', 'rotate(-90)');
    }

    /**
    * Will return the maximum value in any dataset inserted, so we use
    * it later for the maximum number in the Y Axis
    **/
    private getMaxY(): number {
        let maxValuesOfAreas = [];
        this.config.forEach(data => maxValuesOfAreas.push(Math.max.apply(Math, data.dataset.map(d => d.y))));
        return Math.max(...maxValuesOfAreas);
    }

    /**
    * Now we populate using our dataset, mapping the x and y values
    * into the x and y domains, also we set the interpolation so we decide
    * how the Area Chart is plotted.
    **/
    private populate(): void {
        this.config.forEach((area: any) => {
            this.xScale.domain(d3.extent(area.dataset, (d: any) => d.x));
            this.yScale.domain([0, this.getMaxY()]);
            this.svg.append('path')
                .datum(area.dataset)
                .attr('class', 'bar')
                .style('fill', area.settings.fill)
                .attr('d', d3.svg.area()
                    .x((d: any) => this.xScale(d.x))
                    .y0(this.height)
                    .y1((d: any) => this.yScale(d.y))
                    .interpolate(area.settings.interpolation));
        });
    }
}