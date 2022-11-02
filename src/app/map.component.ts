import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, Inject, Injector, OnInit, Renderer2 } from '@angular/core';
import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { IconComponent } from './icon/icon.component';
import {
  createCustomElement,
  NgElement,
  WithProperties,
} from '@angular/elements';

@Component({
  selector: 'map',
  template: `<section #map></section>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class MapComponent implements OnInit {
  @ViewChild('map') map!: ElementRef;
  iconElement!: any;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {

  }

  ngOnInit(): void {
    console.log(this.iconElement);

    
    const child = this.document.createElement('div');
    // const icon = this.document.createElement('icon-element');
    // const t = this.showAsComponent('');
    child.innerHTML =
      '<img width="50" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />';
    this.renderer.appendChild(this.map.nativeElement, child);
    // Create element
    const icon = document.createElement('popup-component');
    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(IconComponent);
    const popupComponentRef = factory.create(this.injector, [], icon);
  
     // Attach to the view so that the change detector knows to run
     this.applicationRef.attachView(popupComponentRef.hostView);
    this.renderer.appendChild(this.map.nativeElement, icon);
  }
}
