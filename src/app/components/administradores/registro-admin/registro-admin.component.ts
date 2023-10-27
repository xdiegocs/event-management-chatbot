import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { regAdminModel } from 'src/app/models/regAdmin-model';
import { GeneralServiceService } from 'src/app/providers/general-service.service';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})
export class RegistroAdminComponent {

  constructor(private router: Router,
    private generalService: GeneralServiceService) {

  }

  submitForm() {  
    this.router.navigate(['/login-admin']);
  }

  registrarAdmin( nombres: string, apellidos: string, fechaNacimiento: string, DPI: string, telefono: string, direccion: string, correo: string, contrasenia: string) {
    let usuario: regAdminModel={
      nombres: nombres,
      apellidos: apellidos,
      fechaNacimiento: fechaNacimiento,
      DPI: DPI,
      telefono: telefono,
      direccion: direccion,
      correo: correo,
      contrasena: contrasenia,
    };

    this.generalService.regAdmin(usuario).subscribe(response => {
      console.log('FASE 1');
      console.log(response);
      if (response.ok) {
        alert(response.mensaje);
        this.router.navigate(['/pagina-inicio-admin']);
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
