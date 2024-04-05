import { Component, Input } from '@angular/core';
import { IManagementSolution } from '../../shared/interfaces/IManagementSolution';

@Component({
  selector: 'sp-management-solution-card',
  standalone: true,
  imports: [],
  templateUrl: './management-solution-card.component.html',
  styleUrl: './management-solution-card.component.scss'
})
export class ManagementSolutionCardComponent {
@Input() managementSolution!: IManagementSolution; 
}
