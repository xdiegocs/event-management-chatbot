import { Component } from '@angular/core';
import { ReContraseniaModel } from 'src/app/models/usuarios-model';
import { GeneralServiceService } from 'src/app/providers/general-service.service';

@Component({
  selector: 'app-recuperar-usuario',
  templateUrl: './recuperar-usuario.component.html',
  styleUrls: ['./recuperar-usuario.component.css']
})
export class RecuperarUsuarioComponent {

  constructor(private generalService: GeneralServiceService) { }

  actualizarPassword(correo: string, contraseniaactual: string, contrasenianueva: string) {
    let usuario:ReContraseniaModel={
      Correo: correo,
      ContrasenaActual: contraseniaactual,
      NuevaContrasena: contrasenianueva
    };

    this.generalService.actualizarContrasena(usuario).subscribe(response => {
      console.log('FASE 1');
      console.log(response);
      if (response.success == true){
        alert('Contraseña actualizada correctamente');
      }
      else{
        alert('Error al actualizar contraseña');
      }
    }, error => {
      console.log('FASE 2');
      console.error(error);
    });
  }
  
}
