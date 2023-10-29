import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReContraseniaModel } from '../models/usuarios-model';
import { ContactosModel } from '../models/contacto';
import { ClientesModel } from '../models/clientes-model';
import { AdminsModel } from '../models/admins-model';
import { regClienteModel } from '../models/regCliente-model';
import { regAdminModel } from '../models/regAdmin-model';
import { RegCotizacionesModel } from '../models/regCotizaciones';
import { ReContraseniaAdminModel } from '../models/ReAdmin-model';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  constructor(private http:HttpClient) { }

  URL = 'http://localhost:4000/';

  getCotizaciones(): Observable<any> {
    return this.http.get<any>(`${this.URL}cotizaciones/obtener`);
  }

  actualizarContrasena(data: ReContraseniaModel): Observable<any> {
    return this.http.put<any>(`${this.URL}usuarios/actualizarContrasenia`, data);
  }
  
  actualizarContrasenaAdmin(data: ReContraseniaAdminModel): Observable<any> {
    return this.http.put<any>(`${this.URL}admin/actualizarAContrasenia`, data);
  }

  ingresarContacto(data: ContactosModel): Observable<any> {
    return this.http.post<any>(`${this.URL}contacto/nuevo`, data);
  }

  loginCliente(data: ClientesModel): Observable<any> {
    return this.http.post<any>(`${this.URL}cliente/login`, data);
  }

  loginAdmin(data: AdminsModel): Observable<any> {
    return this.http.post<any>(`${this.URL}admin/login`, data);
  }

  regUsuario(data: regClienteModel): Observable<any> {
    return this.http.post<any>(`${this.URL}cliente/registrar`, data);
  }
  
  regAdmin(data: regAdminModel): Observable<any> {
    return this.http.post<any>(`${this.URL}admin/registrar`, data);
  }

  regCotizaciones(data: RegCotizacionesModel): Observable<any> {
    return this.http.post<any>(`${this.URL}cotizacion/nueva`, data);
  }

}
