import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { RecuperarUsuarioComponent } from './components/usuarios/recuperar-usuario/recuperar-usuario.component';
import { PaginaInicioComponent } from './components/usuarios/pagina-inicio/pagina-inicio.component';
import { PerfilUsuarioComponent } from './components/usuarios/perfil-usuario/perfil-usuario.component';
import { PerfilAdminComponent } from './components/administradores/perfil-admin/perfil-admin.component';
import { RecuperarAdminComponent } from './components/administradores/recuperar-admin/recuperar-admin.component';
import { LoginAdminComponent } from './components/administradores/login-admin/login-admin.component';
import { RegistroUsuarioComponent } from './components/usuarios/registro-usuario/registro-usuario.component';
import { RegistroAdminComponent } from './components/administradores/registro-admin/registro-admin.component';
import { PaginaInicioAdminComponent } from './components/administradores/pagina-inicio-admin/pagina-inicio-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralServiceService } from './providers/general-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    RecuperarUsuarioComponent,
    PaginaInicioComponent,
    PerfilUsuarioComponent,
    PerfilAdminComponent,
    RecuperarAdminComponent,
    LoginAdminComponent,
    RegistroUsuarioComponent,
    RegistroAdminComponent,
    PaginaInicioAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // UsuariosRoutingModule,
    // AdminRoutingModule,
    // HomeRoutingModule,
    HttpClientModule
  ],
  providers: [GeneralServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
