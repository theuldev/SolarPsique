import { Component } from '@angular/core';
import { WrapperComponent } from '../../components/wrapper/wrapper.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sp-localization',
  standalone: true,
  imports: [WrapperComponent, CommonModule],
  templateUrl: './localization.component.html',
  styleUrl: './localization.component.scss'
})
export class LocalizationComponent {

}
