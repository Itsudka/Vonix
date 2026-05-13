import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroFeature } from '../../../interfaces/interface.intro';
import { IntroModel, IntroService } from '../../../../shared/services/intro.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {
  models = signal<IntroModel[]>([]);
  isLoadingModels = signal(true);

  features: HeroFeature[] = [
    {
      icon: 'pi pi-box',
      title: 'Alta calidad',
      description: 'Impresiones detalladas',
    },
    {
      icon: 'pi pi-shield',
      title: 'Materiales premium',
      description: 'PLA, ABS, PETG y más',
    },
    {
      icon: 'pi pi-clock',
      title: 'Entrega rápida',
      description: 'Cumplimos tus tiempos',
    },
  ];

  constructor(private introService: IntroService) {
    this.loadIntroModels();
  }

  async loadIntroModels(): Promise<void> {
    this.isLoadingModels.set(true);

    const models = await this.introService.getIntroModels();

    this.models.set(models);
    this.isLoadingModels.set(false);
  }
}
