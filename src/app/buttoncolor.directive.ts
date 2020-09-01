import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtoncolor]',
})
export class ButtoncolorDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.setBgColor('#db9554');
  }

  setBgColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('#5880a0');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('#db9554');
  }
}
