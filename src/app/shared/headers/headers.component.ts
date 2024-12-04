import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

import AOS from 'aos';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadersComponent implements OnInit {
  @ViewChild('navbar', { static: true }) navbar!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.navbar) return; // Si no está definido, salir de la función.

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 45) {
      this.navbar.nativeElement.classList.add('sticky-top', 'shadow-sm');
    } else {
      this.navbar.nativeElement.classList.remove('sticky-top', 'shadow-sm');
    }
  }

  public customOptions: OwlOptions = {
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    dots: false,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  public slides = [
    {
      id: '1',
      src: './../../../assets/img/carrucel_superio/imagen-1.jpeg',
      alt: 'Slide 1',
    },
    {
      id: '2',
      src: './../../../assets/img/carrucel_superio/imagen-2.jpeg',
      alt: 'Slide 2',
    },
    {
      id: '3',
      src: './../../../assets/img/carrucel_superio/imagen-portada.webp',
      alt: 'Slide 3',
    },
  ];

  ngOnInit() {
    AOS.init();
  }
}
