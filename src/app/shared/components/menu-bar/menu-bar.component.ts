import { Component, inject } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

  // private router = inject(Router);

  public menuItems = [
    { name: "inicio", path: "/home"},
    { name: "Projectos", path: "/projects"},
    { name: "contacto", path: "/contact"},
  ]
}
