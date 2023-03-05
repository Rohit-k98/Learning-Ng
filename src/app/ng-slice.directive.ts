import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNgSlice]'
})
export class NgSliceDirective implements OnInit {
  @Input() onHover: string = 'Orange'
  @Input() defaultColor: string = '#4e4e50'
  @Input() onLeave: string = 'green'
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  // constructor(private elementref: ElementRef, private someRR: Renderer2) {
  // }
  ngOnInit() {
    // this.elementref.nativeElement.style.backgroundColor = 'black';
    // this.elementref.nativeElement.style.color = 'yellow';
    // this.someRR.setStyle(this.elementref.nativeElement, 'backgroundColor', 'orange')
    // this.someRR.setStyle(this.elementref.nativeElement, 'color', 'white')
  }
  @HostListener('mouseover') mouseover(eventData: Event) {
    // this.someRR.setStyle(this.elementref.nativeElement, 'backgroundColor', 'orange')
    this.backgroundColor = this.onHover;
  }
  @HostListener('mouseleave') mouseover21(eventData: Event) {
    // this.someRR.setStyle(this.elementref.nativeElement, 'backgroundColor', 'green')
    this.backgroundColor = this.onLeave;
  }

}
