import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]',
  standalone: true
})
export class BackgroundDirective {

  constructor(private _el:ElementRef, private _rendr:Renderer2) { 
   // this._el.nativeElement.style="background-color:green";
   
  }
  ngOnInit():void{
    //this._el.nativeElement.style="background-color:green";
    //this._rendr.setStyle(this._el.nativeElement,"background-color","orange");
    //this._rendr.setAttribute(this._el.nativeElement,"style","background-color:blue;color:#fff;font-size:21px;")
  }
  @HostBinding('style.backgroundColor') tbs="red";
  @HostListener('click') san()
{
 // this._rendr.setAttribute(this._el.nativeElement,"style","background-color:blue;color:#fff;font-size:21px;")
 this.tbs="yellow";
}
}
