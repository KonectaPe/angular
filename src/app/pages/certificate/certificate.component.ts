import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [NgClass],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css',
})
export class CertificateComponent {
  searchTypeSelected: string = 'DNI';
  searchTypes = [
    { id: 1, type: 'DNI' },
    { id: 2, type: 'Código' },
    { id: 3, type: 'Nombres' },
  ];
  organizations = [
    { id: 1, logo: 'images/cal.webp' },
    { id: 2, logo: 'images/cip.webp' },
    { id: 3, logo: 'images/unp.webp' },
    { id: 4, logo: 'images/ecomas.webp' },
  ];

  setSearchType(type: string) {
    this.searchTypeSelected = type;
  }
}
