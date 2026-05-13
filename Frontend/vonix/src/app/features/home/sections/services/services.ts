import { Component } from '@angular/core';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services: ServiceItem[] = [
    {
      icon: 'pi pi-user',
      title: 'Figuras personalizadas',
      description:
        'Diseñamos e imprimimos figuras únicas con gran nivel de detalle.',
    },
    {
      icon: 'pi pi-box',
      title: 'Prototipos',
      description:
        'Transformamos tus ideas en prototipos funcionales para validar y visualizar.',
    },
    {
      icon: 'pi pi-cog',
      title: 'Piezas funcionales',
      description:
        'Imprimimos piezas resistentes y precisas para aplicaciones reales.',
    },
    {
      icon: 'pi pi-desktop',
      title: 'Diseño 3D',
      description:
        'Creamos modelos 3D desde cero o a partir de referencias existentes.',
    },
  ];
}
