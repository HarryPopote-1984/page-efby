import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }
 }
