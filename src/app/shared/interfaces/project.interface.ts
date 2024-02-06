export interface project{
    title: string;
    tecnologias: tecnologia[];
    descripccion?: string
    dificultad?: number;
}

export interface tecnologia{
    tecnologia: string
    estilo: object;
    src: string;

}