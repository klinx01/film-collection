import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true,
})
export class AutofocusDirective implements OnInit {

  private elementRef: ElementRef = inject(ElementRef);

  ngOnInit(): void {
    this.elementRef.nativeElement.focus();
  }

}
