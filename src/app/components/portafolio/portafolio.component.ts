import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import AOS from 'aos';
declare var lightbox: any;

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortafolioComponent implements OnInit{

  ngOnInit() {
    AOS.init();

    if (lightbox) {
      lightbox.option({
        resizeDuration: 200, // Duración del efecto de redimensionado
        wrapAround: true, // Permite navegar en bucle entre imágenes
        fadeDuration: 300, // Duración del efecto de desvanecimiento
        imageFadeDuration: 300 // Duración del desvanecimiento de las imágenes
      });
    }
  }



}
