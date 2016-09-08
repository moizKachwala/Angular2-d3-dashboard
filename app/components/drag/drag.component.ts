import { Component, ElementRef, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'drag',
    template: `
    <h1>Integrating jQuery with Angular 2.0</h1>
        <div class="moving-box">
            Drag this box around
        </div>
        `
})
export class DragComponent implements OnInit {

    elementRef: ElementRef;
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        jQuery(this.elementRef.nativeElement).draggable({ containment: '#draggable-parent' });
    }
}
