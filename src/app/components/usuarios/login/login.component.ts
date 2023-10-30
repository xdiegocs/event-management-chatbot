import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesModel } from 'src/app/models/clientes-model';
import { GeneralServiceService } from 'src/app/providers/general-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private generalService: GeneralServiceService) { }

  ngOnInit() {
    
    // console.log(this.iniciarSesion);
  }

  iniciarSesion(correo: string, contrasenia: string) {
    let cliente: ClientesModel={
      correo: correo,
      contrasenia: contrasenia,
    };

    this.generalService.loginCliente(cliente).subscribe(response => {
      
      
      this.router.navigate(['/pagina-inicio-usuario']);
        console.log(response);
    });
  }

}
