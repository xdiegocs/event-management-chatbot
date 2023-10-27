import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesModel } from 'src/app/models/clientes-model';
import { GeneralServiceService } from 'src/app/providers/general-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private generalService: GeneralServiceService) { }

  vistaInicio() {
    this.router.navigate(['/pagina-inicio-usuario']);
  }

  vistaRegistro() {
    this.router.navigate(['/registro-usuario']);
  }

  vistaRecuperarUsuario() {
    this.router.navigate(['/recuperarusuario']);
  }

  iniciarSesion(correo: string, contrasenia: string) {
    let cliente: ClientesModel={
      correo: correo,
      contrasenia: contrasenia,
    };

    this.generalService.loginCliente(cliente).subscribe(response => {
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
