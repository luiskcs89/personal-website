import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharacter]'
})
export class CharacterDirective {

  scrollTimer;
  pastX = 0;

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.parentElement.addEventListener('scroll', (event) => {

        if (this.pastX > event.target.scrollLeft) {
          this.eleRef.nativeElement.classList.remove('idle-r');
          this.eleRef.nativeElement.classList.remove('idle-l');
          this.eleRef.nativeElement.classList.remove('run-r');
          this.eleRef.nativeElement.classList.add('run-l');
        } else {
          this.eleRef.nativeElement.classList.remove('idle-r');
          this.eleRef.nativeElement.classList.remove('idle-l');
          this.eleRef.nativeElement.classList.remove('run-l');
          this.eleRef.nativeElement.classList.add('run-r');
        }

        if (this.scrollTimer !== -1) {
            clearTimeout(this.scrollTimer);
        }

        this.pastX = event.target.scrollLeft;

        this.scrollTimer = setTimeout(() => {
          if (this.eleRef.nativeElement.classList.contains('run-l')) {
            this.eleRef.nativeElement.classList.remove('run-r');
            this.eleRef.nativeElement.classList.remove('run-l');
            this.eleRef.nativeElement.classList.remove('idle-r');
            this.eleRef.nativeElement.classList.add('idle-l');
          } else {
            this.eleRef.nativeElement.classList.remove('run-r');
            this.eleRef.nativeElement.classList.remove('run-l');
            this.eleRef.nativeElement.classList.remove('idle-l');
            this.eleRef.nativeElement.classList.add('idle-r');
          }
        }, 500);
    }, true);
  }

}
