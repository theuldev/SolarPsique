import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { bootstrapCalendar, bootstrapInstagram } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { cssLink } from '@ng-icons/css.gg';
import { radixLink2 } from '@ng-icons/radix-icons';

@Component({
  selector: 'sp-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent], providers: [provideIcons({ bootstrapCalendar, radixLink2,bootstrapInstagram }), provideNgIconsConfig({
    size: '1.8em',
    color: '#0c0c0c',
  })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  goToElementWithScroll(event: any) {
console.log(event.srcElement.id)
  }
}
