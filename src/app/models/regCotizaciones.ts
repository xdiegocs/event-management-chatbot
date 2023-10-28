export class RegCotizacionesModel {
    constructor(
        public descripcion: string,
        public fechaInicio: string,
        public fechaFin: string,
        public lugar: string,
        public cantidadPersonas: string,
        public correo: string,
        public evento: number
    ) {}
}