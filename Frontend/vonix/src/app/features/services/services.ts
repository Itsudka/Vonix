import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  ServiceItem,
  ServiceService,
} from '../../shared/services/service.service';

interface WorkflowItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = signal<ServiceItem[]>([]);
  isLoading = signal(true);

  workflowItems: WorkflowItem[] = [
    {
      number: '01',
      title: 'Recibimos tu idea',
      description:
        'Puedes enviarnos un archivo 3D, una imagen, un plano, un boceto o una explicación del proyecto.',
      icon: 'pi pi-comments',
    },
    {
      number: '02',
      title: 'Revisamos el archivo',
      description:
        'Validamos medidas, material, tiempo de impresión, detalles técnicos y posibles ajustes.',
      icon: 'pi pi-search',
    },
    {
      number: '03',
      title: 'Imprimimos tu pieza',
      description:
        'Fabricamos la pieza con la configuración adecuada y revisamos el resultado antes de entregarla.',
      icon: 'pi pi-print',
    },
  ];

  constructor(private serviceService: ServiceService) {
    this.loadServices();
  }

  async loadServices(): Promise<void> {
    this.isLoading.set(true);

    const services = await this.serviceService.getServices();

    this.services.set(services);
    this.isLoading.set(false);
  }
}
