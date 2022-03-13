import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBold]',
})
export class BoldDirective {
  // element là tên tag mà mình dag sử dụng thuộc tính appBold cho nó
  constructor(private element: ElementRef, private renderer: Renderer2) {
    //cach 1: element: ElementRef
    //element.nativeElement.style.color = 'green';

    //cach 2: renderer: Renderer2
    renderer.setStyle(element.nativeElement, 'color', 'green');
  }
}
