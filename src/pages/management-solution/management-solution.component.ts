import { Component } from '@angular/core';
import { WrapperComponent } from '../../components/wrapper/wrapper.component';
import { IManagementSolution } from '../../shared/interfaces/IManagementSolution';
import { returnManagementSolutions } from '../../shared/interfaces/IManagementSolution';
import { CommonModule } from '@angular/common';
import { ManagementSolutionCardComponent } from '../../components/management-solution-card/management-solution-card.component';
import { ServicesCardComponent } from '../../components/services-card/services-card.component';


@Component({
  selector: 'sp-management-solution',
  standalone: true,
  imports: [WrapperComponent, CommonModule, ManagementSolutionCardComponent, ServicesCardComponent],
  templateUrl: './management-solution.component.html',
  styleUrl: './management-solution.component.scss'
})
export class ManagementSolutionComponent {

  managementSolutions: IManagementSolution[] = returnManagementSolutions();
  services: any = [
    {
      title: 'Gestão & Solução', subtitle: 'Recrutamento & Seleção:Encontre os melhores talentos para sua equipe com nosso serviço de Recrutamento & Seleção.Construímos equipes de alto desempenho por meio de processos seletivos eficientes e personalizados.'
    },
    {
      title: 'Treinamento & Desenvolvimento', subtitle: 'Invista no crescimento da sua equipe com programas de Treinamento & Desenvolvimento personalizados.Desenvolvemos habilidades e competências para impulsionar o sucesso profissional de seus colaboradores.'
    },
    {
      title: 'Carreira - Descrição de Cargos e Salários', subtitle: 'Estabeleça estruturas salariais justas e descrições de cargos claras para promover o crescimento profissional.Equilibramos equidade salarial e definição precisa de funções para impulsionar a satisfação e o engajamento.'
    },
    {
      title: 'Pesquisa de Clima', subtitle: 'Avalie o pulso organizacional com nossa Pesquisa de Clima, identificando oportunidades para um ambiente mais saudável.Entenda as percepções e necessidades de sua equipe através da Pesquisa de Clima, promovendo um local de trabalho positivo.'
    }, {
      title: 'Avaliação de Desempenho', subtitle: 'Potencialize o crescimento individual e organizacional com nossas Avaliações de Desempenho.Mensure e reconheça o desempenho excepcional através de avaliações precisas e orientadas para o desenvolvimento.'
    }]

}
