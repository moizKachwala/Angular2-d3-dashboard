import { Directive, ElementRef, Renderer, Attribute, SimpleChange, OnChanges } from '@angular/core';
import * as d3 from 'd3';

@Directive({
  selector: 'bar-chart-simple',
  properties: ['data']
})

export class BarGraphSimple implements OnChanges {
  private data: Array<number>;

  private host;
  private svg;
  private margin;
  private width;
  private height;
  private barHeight = 20;
  private x;
  private y;
  private xAxis;
  private yAxis;
  private htmlElement: HTMLElement;

  constructor(elementRef: ElementRef, @Attribute('width') width: string, @Attribute('height') height: string) {
    this.htmlElement = elementRef.nativeElement;
    this.host = d3.select(elementRef.nativeElement);
    this.width = width;
    this.height = height;
  }

  ngOnChanges(): void {

    this.setup();
    this.drawXAxis();
    this.drawYAxis();
    this.buildSvg();
    this.populate();
  }

  private setup(): void {
    this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
    this.width = this.width - this.margin.left - this.margin.right;
    this.height = this.height - this.margin.top - this.margin.bottom;
  }

  private drawXAxis(): void {
    this.x = d3.scale.ordinal()
        .rangeRoundBands([0, this.width], .1);

    this.xAxis = d3.svg.axis()
            .scale(this.x)
          .orient("bottom");
  }

  private drawYAxis(): void {
    this.y = d3.scale.linear()
    .range([this.height, 0]);

    this.yAxis = d3.svg.axis()
          .scale(this.y)
          .orient("left")
          .tickPadding(10);
  }

  private buildSvg(): void {

    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }


  private populate(): void {

    this.x.domain(this.data.map(function(d) { return d; }));
    this.y.domain([0, d3.max(this.data, function(d) { return d; })]);

    this.svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + this.height + ")")
      .call(this.xAxis);

      this.svg.append("g")
      .attr("class", "y axis")
      .call(this.yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Frequency");

      this.svg.selectAll(".bar")
      .data(this.data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", (d:any) => this.x(d))
      .attr("width", this.x.rangeBand())
      .attr("y", (d:any) => this.y(d))
      .attr("height",  (d:any) => this.height - this.y(d));

    // var bar = this.svg.selectAll("g")
    //   .data(this.data)
    //   .enter().append("g")
    //   .attr("transform", ((d: any, i: number) => "translate(0," + i * this.barHeight + ")"));

    // bar.append("rect")
    //   .attr("width", this.x)
    //   .attr("height", this.barHeight - 1);

    // bar.append("text")
    //   .attr("x", ((d: any) => this.x(d) - 3))
    //   .attr("y", this.barHeight / 2)
    //   .attr("dy", ".35em")
    //   .text((d: any) => d);

  }

}