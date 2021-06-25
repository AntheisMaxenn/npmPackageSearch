/* tslint:disable:member-ordering */
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPopAnimate]'
})
export class PopAnimateDirective{

  constructor(private el: ElementRef) { }


  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.textDecoration = 'underline';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.textDecoration = '';
  }
}
