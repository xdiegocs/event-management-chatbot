import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReContraseniaAdminModel } from 'src/app/models/ReAdmin-model';
import { GeneralServiceService } from 'src/app/providers/general-service.service';

@Component({
  selector: 'app-recuperar-admin',
  templateUrl: './recuperar-admin.component.html',
  styleUrls: ['./recuperar-admin.component.css']
})
export class RecuperarAdminComponent implements OnInit{

  OnInit() {
  
  }

  constructor(private generalService: GeneralServiceService,
    private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  actualizarPassword(correo: string, contraseniaactual: string, contrasenianueva: string) {
    let admin:ReContraseniaAdminModel={
      Correo: correo,
      ContrasenaActual: contraseniaactual,
      NuevaContrasena: contrasenianueva
    };

    this.generalService.actualizarContrasenaAdmin(admin).subscribe(response => {
      console.log('FASE 1');
      console.log(response);
      if (response.success == true){
        alert('Contraseña actualizada correctamente');
        this.router.navigate(['/login-admin']);
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
