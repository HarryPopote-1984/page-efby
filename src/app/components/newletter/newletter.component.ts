import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-newletter',
  standalone: true,
  imports: [],
  templateUrl: './newletter.component.html',
  styleUrl: './newletter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewletterComponent { }
