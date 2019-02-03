import { Component} from '@angular/core';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent {

  public imageUrl: string = 'assets/images/sam.png';
  public name: string = 'Sam Jefferson';
  public logoUrl: string = 'assets/images/aboutlogo1.png';


   public  attributes = [{
      logo: this.logoUrl,
      photo: this.imageUrl,
      text: ['Positive Attitude','Quick Learning Ability', 'Good Team Player', 'Analytical Mindset'],
      title: this.name,
      subtitle: 'Back-End Java/Spring Developer'
    }, {
      logo: this.logoUrl,
      photo: this.imageUrl,
      text: ['Good Problem Solving Skills' , 'Good Time Management',
        'Good Communication Skills', 'Positive Mindset'],
      title: this.name,
      subtitle: 'Back-End Java/Spring Developer'
    }, {
      logo: this.logoUrl,
      photo: this.imageUrl,
      text: ['Adaptabily','Flexibility', 'Creative Thinking', 'End User Focus'],
      title: this.name,
      subtitle: 'Back-End Java/Spring Developer'
    }];
  }

