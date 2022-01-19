import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWarnining]'
})
export class WarniningDirective {

  constructor(highlight_elem:ElementRef) {
    highlight_elem.nativeElement.style.backgroundColor="yellow"
 }
}
