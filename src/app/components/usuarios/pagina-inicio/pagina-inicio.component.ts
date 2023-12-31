import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegCotizacionesModel } from 'src/app/models/regCotizaciones';
import { GeneralServiceService } from 'src/app/providers/general-service.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {

  constructor(
    private router: Router,
    private generalService: GeneralServiceService) { }

    registrarCotizaciones(descripcion: string, fechaInicio: string, fechaFin: string, lugar: string, cantidadPersonas: string, correo: string, evento: string) {
      let cotizaciones: RegCotizacionesModel={
        descripcion: descripcion,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        lugar: lugar,
        cantidadPersonas: cantidadPersonas,
        correo: correo,
        evento: Number(evento),
      };
  
      this.generalService.regCotizaciones(cotizaciones).subscribe(response => {
        console.log('FASE 1');
        console.log(response);

        if (response.success == true){
          alert('Cotizacion registrada correctamente');
          this.router.navigate(['/pagina-inicio-usuario']);
        }
        
      }, error => {
        console.log('FASE 2');
        console.error(error);
      });
    }

}
