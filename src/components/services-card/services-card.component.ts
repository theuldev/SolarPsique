import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sp-services-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.scss'
})
export class ServicesCardComponent {
  @Input() item :any
}
