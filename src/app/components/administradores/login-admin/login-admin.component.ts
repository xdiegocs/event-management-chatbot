import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  constructor(private router: Router) { }

  vistaInicio() {
    this.router.navigate(['/pagina-inicio-admin']);
  }

}
