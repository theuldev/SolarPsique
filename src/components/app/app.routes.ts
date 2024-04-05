import { Routes } from '@angular/router';
import { ManagementSolutionComponent } from '../../pages/management-solution/management-solution.component';
import { LocalizationComponent } from '../../pages/localization/localization.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('../../pages/services-page/services-page.module').then(m => m.ServicesPageModule)
  },
  {
    path:'gestao',
    component: ManagementSolutionComponent
  },
  {
    path:'localizacao',
    component: LocalizationComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];
