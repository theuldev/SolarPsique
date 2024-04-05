export interface IServicesInfo {

    title: string;
    subtitle: string;
    link?: string;
    photo: string;

}
export function returnServices(): IServicesInfo[] {
    var services: IServicesInfo[] = [{
        title: 'Atendimento Clinico', subtitle: ' Atendimento clínico - Presencial e Online (Adolescente; adulto; idosos e casais), com abordagem humanizada e acolhedora, oferecendo apoio individualizado para lidar com as suas questões, podendo ser: ansiedade; estresse; depressão; relacionamentos e outros desafios emocionais. ',
        link: '', photo: 'atendimento_clinico_photo.jpeg'
    },
    {
        title: 'Consultoria Organizacional', subtitle: 'R&S; T&D; Descrição de cargos; Treinamentos e demais subsistemas relacionados a Gestão de Pessoas.', link: ''
        , photo: 'organizacional_photo.jpeg'
    }, {
        title: 'Avaliação Individualizada', subtitle: 'Avaliação Psicossocial; Avaliação Psicológica; Avaliação Psicopedagógico; Avaliação para concurso;Orientação Profissional; Supervisão acadêmica e profissional;'
        , link: 'https://forms.gle/D8zbV2tZjHyedqPs9', photo: 'atendimento_individualizado_photo.jpeg'
    }];
    return services;
}