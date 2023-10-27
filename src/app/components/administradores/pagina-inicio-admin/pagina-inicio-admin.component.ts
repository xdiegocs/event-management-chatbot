import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/providers/general-service.service';

@Component({
  selector: 'app-pagina-inicio-admin',
  templateUrl: './pagina-inicio-admin.component.html',
  styleUrls: ['./pagina-inicio-admin.component.css']
})
export class PaginaInicioAdminComponent implements OnInit {

  cotizaciones: any[] = [];

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.obtenerCotizaciones();
  }

  obtenerCotizaciones(): void {
    this.generalService.getCotizaciones().subscribe(data => {
      if (data.success) {
        this.cotizaciones = data.data[0] as any;
        console.log(this.cotizaciones);
      }
    }, error => {
      console.error("Error obteniendo cotizaciones:", error);
    });
  }

}
