import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsModel } from 'src/app/models/admins-model';
import { GeneralServiceService } from 'src/app/providers/general-service.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  constructor(
    private router: Router,
    private generalService: GeneralServiceService) { }

  vistaInicio() {
    this.router.navigate(['/pagina-inicio-admin']);
  }

  iniciarSesion(correo: string, contrasenia: string) {
    let admin: AdminsModel ={
      correo: correo,
      contrasenia: contrasenia,
    };

    this.generalService.loginAdmin(admin).subscribe(response => {
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
