import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [CommonModule],
})
export class NavbarComponent {
  isDrawerOpen: boolean = false;
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.updateBodyScroll();
  }
  private updateBodyScroll() {
    if (this.isDrawerOpen) {
      document.body.classList.add('overflow-hidden'); // Usa la clase de Tailwind
    } else {
      document.body.classList.remove('overflow-hidden'); // Usa la clase de Tailwind
    }
  }
}
