import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input() ratio = 1;
  initialLeft = 0;
  elementRef;

  constructor(private eleRef: ElementRef) {
    this.initialLeft = this.eleRef.nativeElement.getBoundingClientRect().left;
    this.eleRef.nativeElement.parentElement.addEventListener('scroll', (event) => {
        this.eleRef.nativeElement.style.left = (this.initialLeft - (event.target.scrollLeft * this.ratio)) + 'px';
    }, true);
  }

}
