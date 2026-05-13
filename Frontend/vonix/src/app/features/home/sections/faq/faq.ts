import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [RouterLink],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  openIndex: number | null = null;

  faqs: FaqItem[] = [
    {
      question: '¿Qué materiales utilizan para las impresiones?',
      answer:
        'Trabajamos principalmente con PLA, PETG y otros materiales según el tipo de proyecto.',
    },
    {
      question: '¿Cuánto tiempo tarda un proyecto?',
      answer:
        'Depende del tamaño, complejidad y cantidad de piezas. Al cotizar te damos un tiempo estimado.',
    },
    {
      question: '¿Pueden imprimir en colores diferentes?',
      answer:
        'Sí, podemos imprimir en distintos colores según disponibilidad del material.',
    },
    {
      question: '¿Puedo enviar mi propio diseño 3D?',
      answer:
        'Sí, puedes enviarnos tu archivo 3D para revisarlo antes de imprimir.',
    },
  ];

  toggleFaq(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
