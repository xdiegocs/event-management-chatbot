import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { regClienteModel } from 'src/app/models/regCliente-model';
import { GeneralServiceService } from 'src/app/providers/general-service.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {

  constructor(
    private router: Router,
    private generalService: GeneralServiceService) {

  }

  submitForm() {  
    this.router.navigate(['/login-usuario']);
  }

  registrarUsuario( nombres: string, apellidos: string, fechaNacimiento: string, DPI: string, telefono: string, direccion: string, correo: string, contrasenia: string) {
    let usuario: regClienteModel={
      nombres: nombres,
      apellidos: apellidos,
      fechaNacimiento: fechaNacimiento,
      DPI: DPI,
      telefono: telefono,
      direccion: direccion,
      correo: correo,
      contrasena: contrasenia,
    };

    this.generalService.regUsuario(usuario).subscribe(response => {
      console.log('FASE 1');
      console.log(response);
      if (response.ok) {
        alert(response.mensaje);
        this.router.navigate(['/pagina-inicio-usuario']);
      }
      else {
        alert(response.mensaje);
      }

    }, error => {
      console.log('FASE 2');
      console.error(error);
    });
  }

}
