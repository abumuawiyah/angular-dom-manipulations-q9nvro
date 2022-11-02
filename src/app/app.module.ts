import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MapComponent, IconComponent],
  bootstrap: [AppComponent],
  entryComponents: [IconComponent],
})
export class AppModule {}
