export interface IManagementSolution {
    id: number;
    title: string;



}
export function returnManagementSolutions(): IManagementSolution[] {

    var values: IManagementSolution[] = [{
        id: 1, title: 'Recrutamento e Seleção'
    },
    {
        id: 2, title: 'Treinamento e Desenvolvimento'
    }
        , {
        id: 3, title: 'Carreira + Descrição de Cargos e Salários'
    }
        , {
        id: 4, title: 'Pesquisa de Cama'
    },
    {
        id: 5, title: 'Avaliação de Desempenho'
    }]
    return values;
}