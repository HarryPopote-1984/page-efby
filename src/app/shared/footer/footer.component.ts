import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

  public isVisible: boolean = false;

  public slides = [
    {
      id: '1',
      src: 'assets/img/portafolio/portfolio-1.jpg',
      alt: 'Slide 1',
    },

    {
      id: '2',
      src: 'assets/img/portafolio/portfolio-2.jpg',
      alt: 'Slide 2',
    },

    {
      id: '3',
      src: 'assets/img/portafolio/portfolio-3.jpg',
      alt: 'Slide 3',
    },

    {
      id: '4',
      src: 'assets/img/portafolio/portfolio-4.jpg',
      alt: 'Slide 4',
    },
    {
      id: '5',
      src: 'assets/img/portafolio/portfolio-5.jpg',
      alt: 'Slide 5',
    },
    {
      id: '6',
      src: 'assets/img/portafolio/portfolio-6.jpg',
      alt: 'Slide 6',
    },

  ];


  // Controla si el botón es visible

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isVisible = scrollTop > 200; // Muestra el botón si el scroll es mayor a 200px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza la página hacia arriba con animación suave
  }


 }
