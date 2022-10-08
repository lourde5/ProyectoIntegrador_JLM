export class Experiencia {
    id?: number;
    nombreE: string;
    aniosE: string;
    descripcionE: string;

    constructor(nombreE: string, aniosE: string, descripcionE: string){
        this.nombreE = nombreE;
        this.aniosE = aniosE;
        this.descripcionE = descripcionE;
    }
}
