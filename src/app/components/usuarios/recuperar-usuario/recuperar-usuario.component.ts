import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReContraseniaModel } from 'src/app/models/usuarios-model';
import { GeneralServiceService } from 'src/app/providers/general-service.service';

@Component({
  selector: 'app-recuperar-usuario',
  templateUrl: './recuperar-usuario.component.html',
  styleUrls: ['./recuperar-usuario.component.css']
})
export class RecuperarUsuarioComponent implements OnInit {

  OnInit() {
  
  }

  constructor(private generalService: GeneralServiceService,
    private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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
        this.router.navigate(['/login-usuario']);
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
