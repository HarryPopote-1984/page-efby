import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AboutComponent } from "../../components/about/about.component";
import { NewletterComponent } from "../../components/newletter/newletter.component";
import { ServiciosEfbyComponent } from "../../components/servicios-efby/servicios-efby.component";
import { PortafolioComponent } from "../../components/portafolio/portafolio.component";
import { TeamComponent } from '@/components/team/team.component';
import { ActivatedRoute, NavigationSkipped, Router } from '@angular/router';
import { ContactoComponent } from '@/components/contacto/contacto.component';

import * as AOS from 'aos';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule, AboutComponent, NewletterComponent, ServiciosEfbyComponent, PortafolioComponent, TeamComponent, ContactoComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BaseComponent implements OnInit {

  public fragmento: any;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    AOS.init();

    // SE DETECTA SI HAY UN FRAGMENTO ANIDADO A LA RUTA
    this.route.fragment.subscribe((fragment: any) => {
      if (fragment) {
        this.fragmento = fragment;
        const element = document.querySelector(`#${this.fragmento}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    // SE DETECTA SI EL FRAGMENTO CAMBIO EN LA RUTA PARA PODER RUTEAR CON EL NUEVO FRAGMENTO

    this.router.events.subscribe(event => {

      if (event instanceof NavigationSkipped) {

        const currentFragment = event.url.split("#")[1];
        if (currentFragment) {

          const element = document.querySelector(`#${currentFragment}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }

        }
      }
    });

  }

 };


