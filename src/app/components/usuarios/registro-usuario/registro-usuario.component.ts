import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { regClienteModel } from 'src/app/models/regCliente-model';
import { GeneralServiceService } from 'src/app/providers/general-service.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  OnInit() {
  
  }

  constructor(
    private router: Router,
    private generalService: GeneralServiceService) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
      if (response.success == true){
        alert('Usuario registrado exitosamente');
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
