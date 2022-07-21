import {Directive, ElementRef, OnInit, Renderer2, HostListener} from "@angular/core";

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
