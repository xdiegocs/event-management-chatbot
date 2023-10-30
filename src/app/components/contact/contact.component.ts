import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactosModel } from 'src/app/models/contacto';
import { GeneralServiceService } from 'src/app/providers/general-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor( public router: Router,
    public generalService: GeneralServiceService) { }

  actualizarPassword(
    Nombre: string,
    Apellidos: string,
    Direccion: string,
    Correo: string,
    Mensaje: string
  ) {
    let contacto: ContactosModel = {
      Nombre: Nombre,
      Apellidos: Apellidos,
      Direccion: Direccion,
      Correo: Correo,
      Mensaje: Mensaje
    };

    this.generalService.ingresarContacto(contacto).subscribe(response => {
      console.log('FASE 1');
      console.log(response);
      Swal.fire({
        title: 'Exito',
        text: "Contacto ingresado correctamente" ,
        icon: 'success',
        confirmButtonText: 'Aceptar'
        }).then(() => {
          // Navega a la misma vista para recargarla
          this.router.navigate(['/home'])
        });
      // if (response.success === true) {
      //   Swal.fire({
      //     title: 'Exito',
      //     text: "Contacto ingresado correctamente" ,
      //     icon: 'success',
      //     confirmButtonText: 'Aceptar'
      //     }
      //   )
      //   console.log('FASE 3');
      //   alert('Mensaje enviado correctamente');
      // }
      
    }, error => {
      console.log('FASE 2');
      console.error(error);
    });
  }

  

}
