import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingFixService } from '../../shared/services/loading-fix.service';

@Component({
  selector: 'app-home',
  template: `<app-header></app-header>
  <div style="height: 80px; width: 100%"></div>
  <app-image-slider></app-image-slider>
  <app-aboutme></app-aboutme>
  <app-technologies-carousel></app-technologies-carousel> 
  <app-projects-carousel></app-projects-carousel>
  <app-cta></app-cta>
  <app-footer></app-footer>`
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private fix: LoadingFixService
  ) { }

  ngOnInit() {
    this.fix.addFix();
  }
  ngOnDestroy() {
    this.fix.removeFix();
  }
}
