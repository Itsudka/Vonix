import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { Project } from '../../services/project.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, TagModule, ButtonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  items = input.required<Project[]>();
  numVisible = input(3);
  numScroll = input(1);
  autoplayInterval = input(3000);

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  getSeverity(status?: string) {
    switch (status) {
      case 'Disponible':
        return 'success';
      case 'Nuevo':
        return 'info';
      case 'Popular':
        return 'warn';
      case 'Destacado':
        return 'contrast';
      default:
        return 'secondary';
    }
  }
}
