
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppElementComponent } from './app-element/app-element.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import { ItthiComponent } from './itthi/itthi.component';
import { KanorkkornComponent } from './kanorkkorn/kanorkkorn.component';

@NgModule({
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule,
  ],
  declarations: [
    AppElementComponent, 
    ItthiComponent, KanorkkornComponent
  ],
  entryComponents: [AppElementComponent] // use entryComponents array instaed of bootstrap because it will be added dynamically.
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(AppElementComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('peerai-app-test', el);
  }
}
