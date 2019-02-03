import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule, MatExpansionPanelTitle, MatAccordion, MatExpansionModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
// import { CommonDirectivesModule } from '../../directives/common/common-directives.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutes } from './home.routing';


import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsCarouselComponent } from './projects-carousel/projects-carousel.component';
import { TechnologiesCarouselComponent } from './technologies-carousel/technologies-carousel.component';

import { WINDOW_PROVIDERS } from '../../shared/helpers/window.helper';
import { ImageSliderComponent } from './image-slider/image-slider.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatExpansionModule,
    FlexLayoutModule,
    NguCarouselModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    CtaComponent,
    FooterComponent, 
    AboutmeComponent,
    ProjectsCarouselComponent,
    TechnologiesCarouselComponent,
    ImageSliderComponent,

  ],
  providers: [WINDOW_PROVIDERS]

})
export class HomeModule { }
