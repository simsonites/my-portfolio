import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-projects-carousel',
  templateUrl: './projects-carousel.component.html',
  styleUrls: ['./projects-carousel.component.scss']
})
export class ProjectsCarouselComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  
  public carouselOptions: NguCarousel;
  public projects = [{
    photo: 'assets/images/edu1.jpg',
    text: `This is a simple course registration management where students can go
    and register for courses
     `,
    title: 'Students Course Management System',
    demo:'http://c-registration.us-east-2.elasticbeanstalk.com',
    demotText:'live demo',
    number:'Project One',
  }, {
    photo: 'assets/images/b4.jpg',
    text: `This is simple online shop that sells computers 
    and phones of any kind from where anyone can get good stuffs`,
    title: 'New-Wave Computers & Phones',
    demo:'http://www.google.com',
    demotText:'in-progress...',
    number:'Project Two',
  },
    {
    photo: 'assets/images/b7.jpg',
  text: `This is simple employees forum where employee's can share different
   knowledge and experiences `,
  title: 'Employees Forum',
  demo:'',
      demotText:'coming soon',
      number:'Project Three',
},
    {
    photo: 'assets/images/b9.jpg',
    text: `Who Am I ? is a proposed project that can tell you who you 
    are by just asking you some few questions`,
    title: 'Who am I ?',
    demo:'Coming up soon....',
    demotText:'Coming soon ! ....',
    number:'Project Four'
  }];
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
