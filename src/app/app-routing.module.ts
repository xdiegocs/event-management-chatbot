import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { PaginaInicioComponent } from './components/usuarios/pagina-inicio/pagina-inicio.component';
import { PerfilUsuarioComponent } from './components/usuarios/perfil-usuario/perfil-usuario.component';
import { RecuperarUsuarioComponent } from './components/usuarios/recuperar-usuario/recuperar-usuario.component';
import { PerfilAdminComponent } from './components/administradores/perfil-admin/perfil-admin.component';
import { RecuperarAdminComponent } from './components/administradores/recuperar-admin/recuperar-admin.component';
import { LoginAdminComponent } from './components/administradores/login-admin/login-admin.component';
import { RegistroUsuarioComponent } from './components/usuarios/registro-usuario/registro-usuario.component';
import { RegistroAdminComponent } from './components/administradores/registro-admin/registro-admin.component';
import { PaginaInicioAdminComponent } from './components/administradores/pagina-inicio-admin/pagina-inicio-admin.component';

const routes: Routes = [
  //HOME
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  //USUARIOS
  { path: 'login-user', component: LoginComponent },
  { path: 'pagina-inicio', component: PaginaInicioComponent },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent },
  { path: 'recuperar-usuario', component: RecuperarUsuarioComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent },
  //ADMINS
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'pagina-inicio-admin', component: PaginaInicioAdminComponent },
  { path: 'perfil-admin', component: PerfilAdminComponent },
  { path: 'recuperar-admin', component: RecuperarAdminComponent },
  { path: 'registro-admin', component: RegistroAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
