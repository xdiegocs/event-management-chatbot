import { Component } from '@angular/core';
import { ContactosModel } from 'src/app/models/contacto';
import { GeneralServiceService } from 'src/app/providers/general-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private generalService: GeneralServiceService) { }

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
      if (response.status === 201 || response.status === 204) {
        console.log('FASE 3');
        alert('Mensaje enviado correctamente');
      }
      
    }, error => {
      console.log('FASE 2');
      console.error(error);
    });
  }

}
