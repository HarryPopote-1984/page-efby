import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AboutComponent } from "../../components/about/about.component";
import { NewletterComponent } from "../../components/newletter/newletter.component";
import { ServiciosEfbyComponent } from "../../components/servicios-efby/servicios-efby.component";
import { PortafolioComponent } from "../../components/portafolio/portafolio.component";

import AOS from 'aos';
@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule, AboutComponent, NewletterComponent, ServiciosEfbyComponent, PortafolioComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BaseComponent implements OnInit {


  ngOnInit() {
    AOS.init();
  }

 }
