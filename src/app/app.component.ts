import { Component, ViewChild, ElementRef, ViewRef, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  val = 12.2314;

  // @ViewChild('pElement', {read: ElementRef}) pElementRef;
  // @ViewChild('template', {read: TemplateRef}) temaplteRef;
  constructor(elementRef: ElementRef){
    console.log(JSON.stringify(elementRef));
  }
}
