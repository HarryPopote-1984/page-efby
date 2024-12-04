import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-servicios-efby',
  standalone: true,
  imports: [],
  templateUrl: './servicios-efby.component.html',
  styleUrl: './servicios-efby.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosEfbyComponent {

  public listData = [
    {
      src: "",
      alt: "",

    }
  ]




}
