import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  routerLink: string;
  exact?: boolean;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  standalone: true,
})
export class Navbar {
  items: NavItem[] = [
    {
      label: 'Inicio',
      routerLink: '/',
      exact: true,
    },
    {
      label: 'Proyectos',
      routerLink: '/projects',
    },
    {
      label: 'Servicios',
      routerLink: '/services',
    },
    {
      label: 'Contáctanos',
      routerLink: '/contact',
    },
    {
      label: 'FAQ',
      routerLink: '/faq',
    },
  ];
}
