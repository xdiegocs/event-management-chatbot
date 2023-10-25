import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})
export class RegistroAdminComponent {

  constructor(private router: Router) {

  }

  submitForm() {  
    this.router.navigate(['/login-admin']);
  }

}
