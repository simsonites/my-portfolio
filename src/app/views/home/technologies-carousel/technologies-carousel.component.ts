import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-technologies-carousel',
  templateUrl: './technologies-carousel.component.html',
  styleUrls: ['./technologies-carousel.component.scss']
})
export class TechnologiesCarouselComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  panelOpenState = false;

  constructor() { }

  ngOnInit() { }

}
