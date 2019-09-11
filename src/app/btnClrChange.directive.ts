import { Directive, ElementRef, Renderer2, HostListener, Input, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appBtnClrChange]'
})
export class BtnClrChangeDirective {
  text: any;
  div: any;
@Input() inClr;
@Output() outClr = new EventEmitter<any>();
  constructor(public el: ElementRef, private renderer: Renderer2) {
    el.nativeElement.style.color = 'blue';
    console.log(el);
    console.log(renderer);
    renderer.addClass(el.nativeElement , 'demousera');
    this.div = this.renderer.createElement('div');
   }
   sethoverclr(color) {
    this.el.nativeElement.style.color = color;
  }
  emitFun(data) {
    if (data) {
      this.text = this.renderer.createText('Ragunath Rajagopal');
      this.renderer.appendChild(this.div,  this.text);
     this.renderer.appendChild(this.el.nativeElement, this.div);
    } else {
      this.text  = this.renderer.createText('');
      this.renderer.removeChild(this.div,  this.text );
      this.renderer.removeChild(this.el.nativeElement, this.div);
    }
  }
  @HostListener('mouseenter') onMouseEnter() {
    if (this.inClr) {
      this.sethoverclr(this.inClr);
      this.emitFun(true);
    } else  {
      this.sethoverclr('yellow');
    }
  }
  uploadButton() {
    console.log('value');
    this.outClr.emit('darkviolet');
 }

  @HostListener('click') onclick() {
    this.uploadButton();
  }

  @HostListener('mouseout') onmouseout() {
    this.sethoverclr('red');
    this.emitFun(false);
  }
}
