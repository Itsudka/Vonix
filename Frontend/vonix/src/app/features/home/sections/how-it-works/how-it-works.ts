import { Component } from '@angular/core';

interface ProcessStep {
  number: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  imports: [],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks {
  steps: ProcessStep[] = [
    {
      number: 1,
      icon: 'pi pi-comments',
      title: 'Cuéntanos tu idea',
      description: 'Explícanos tu proyecto y necesidades.',
    },
    {
      number: 2,
      icon: 'pi pi-desktop',
      title: 'Diseñamos',
      description: 'Creamos o ajustamos el modelo 3D para tu proyecto.',
    },
    {
      number: 3,
      icon: 'pi pi-print',
      title: 'Imprimimos',
      description: 'Utilizamos tecnología de alta calidad para imprimir tu pieza.',
    },
    {
      number: 4,
      icon: 'pi pi-box',
      title: 'Entregamos',
      description: 'Revisamos la calidad y te entregamos a tiempo.',
    },
  ];
}
