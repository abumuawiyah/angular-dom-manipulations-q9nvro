import { DOCUMENT } from '@angular/common';
import { Inject, OnInit, Renderer2 } from '@angular/core';
import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'map',
  template: `<section #map></section>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class MapComponent implements OnInit {
  @ViewChild('map') map!: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    console.log(this.map);
    const child = this.document.createElement('div');
    child.innerHTML =
      '<img width="50" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />';
    this.renderer.appendChild(this.map.nativeElement, child);
  }
}
