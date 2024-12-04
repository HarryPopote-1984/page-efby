import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import AOS from 'aos';



@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent  implements OnInit{
  ngOnInit() {
    AOS.init();
  }



}
