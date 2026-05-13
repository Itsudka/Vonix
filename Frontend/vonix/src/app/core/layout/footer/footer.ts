import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  route: string;
}

interface FooterService {
  label: string;
}

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  navigationLinks: FooterLink[] = [
    { label: 'Inicio', route: '/' },
    { label: 'Proyectos', route: '/projects' },
    { label: 'Servicios', route: '/services' },
    { label: 'Contáctanos', route: '/contact' },
    { label: 'FAQ', route: '/faq' },
  ];

  services: FooterService[] = [
    { label: 'Figuras personalizadas' },
    { label: 'Prototipos' },
    { label: 'Piezas funcionales' },
    { label: 'Diseño 3D' },
  ];

  socialLinks: SocialLink[] = [
    {
      icon: 'pi pi-instagram',
      url: '#',
      label: 'Instagram',
    },
    {
      icon: 'pi pi-facebook',
      url: '#',
      label: 'Facebook',
    },
    {
      icon: 'pi pi-youtube',
      url: '#',
      label: 'YouTube',
    },
    {
      icon: 'pi pi-tiktok',
      url: '#',
      label: 'TikTok',
    },
  ];
}
