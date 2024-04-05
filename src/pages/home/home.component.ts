import { Component } from '@angular/core';
import { HomeModule } from './home.module';
import { WrapperComponent } from '../../components/wrapper/wrapper.component';

@Component({
  selector: 'sp-home',
  standalone: true,
  imports: [WrapperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
