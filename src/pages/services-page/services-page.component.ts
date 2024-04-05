import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WrapperComponent } from '../../components/wrapper/wrapper.component';
import { ServicesCardComponent } from '../../components/services-card/services-card.component';
import { returnServices } from '../../shared/interfaces/IServicesInfo';

@Component({
  selector: 'sp-services-page',
  standalone: true,
  imports: [CommonModule, WrapperComponent, ServicesCardComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {
  servicesInfo = returnServices();


}
