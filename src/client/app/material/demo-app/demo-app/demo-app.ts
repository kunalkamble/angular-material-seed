import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'home-app',
  template: `
  <div fxLayout="row">
    <nav fxLayout='row' fxLayoutAlign="center center">
      <a mat-button [routerLink]="['autocomplete']">Autocomplete</a>
      <a mat-button [routerLink]="['button']">Button</a>
      <a mat-button [routerLink]="['button-toggle']">Button Toggle</a>
      <a mat-button [routerLink]="['card']">Card</a>
      <a mat-button [routerLink]="['checkbox']">Checkbox</a>
      <a mat-button [routerLink]="['dialog']">Dialog</a>
      <a mat-button [routerLink]="['gestures']">Gestures</a>
      <a mat-button [routerLink]="['grid-list']">Grid List</a>
      <a mat-button [routerLink]="['icon']">Icon</a>
      <a mat-button [routerLink]="['input']">Input</a>
      <a mat-button [routerLink]="['list']">List</a>
      <a mat-button [routerLink]="['menu']">Menu</a>
      <a mat-button [routerLink]="['live-announcer']">Live Announcer</a>
      <a mat-button [routerLink]="['overlay']">Overlay</a>
      <a mat-button [routerLink]="['portal']">Portal</a>
      <a mat-button [routerLink]="['progress-bar']">Progress Bar</a>
      <a mat-button [routerLink]="['progress-circle']">Progress Circle</a>
      <a mat-button [routerLink]="['radio']">Radio</a>
      <a mat-button [routerLink]="['ripple']">Ripple</a>
      <a mat-button [routerLink]="['sidenav']">Sidenav</a>
      <a mat-button [routerLink]="['slider']">Slider</a>
      <a mat-button [routerLink]="['slide-toggle']">Slide Toggle</a>
      <a mat-button [routerLink]="['tabs']">Tabs</a>
      <a mat-button [routerLink]="['toolbar']">Toolbar</a>
      <a mat-button [routerLink]="['tooltip']">Tooltip</a>
      <a mat-button [routerLink]="['tree']">Tree</a>
      <a mat-button [routerLink]="['baseline']">Baseline</a>
      <a mat-button [routerLink]="['table']">Table</a>
    </nav>
  </div>
  <router-outlet></router-outlet>
  `
})
export class HomeComponent {}
