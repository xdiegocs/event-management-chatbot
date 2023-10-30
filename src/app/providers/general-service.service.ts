import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
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
    return this.http.get<any>(`${this.URL}cotizaciones/obtener`).pipe(
      catchError(error => {
        console.error('Error en el servicio:', error);
        return throwError(error);
      })
    );
  }

  actualizarContrasena(data: ReContraseniaModel): Observable<any> {
    return this.http.put<any>(`${this.URL}usuarios/actualizarContrasenia`, data).pipe(
      catchError(error => {
        console.error('Error en el servicio:', error);
        return throwError(error);
      })
    );
  }
  
  actualizarContrasenaAdmin(data: ReContraseniaAdminModel): Observable<any> {
    return this.http.put<any>(`${this.URL}admin/actualizarAContrasenia`, data).pipe(
      catchError(error => {
        console.error('Error en el servicio:', error);
        return throwError(error);
      })
    );
  }

  ingresarContacto(data: ContactosModel): Observable<any> {
    return this.http.post<any>(`${this.URL}contacto/nuevo`, data).pipe(
      catchError(error => {
        console.error('Error en el servicio:', error);
        return throwError(error);
      })
    );
  }

  loginCliente(data: ClientesModel)  {
    console.log(data);
    return this.http.post<any>(`${this.URL}cliente/login`, data).pipe(
      catchError(error => {
        console.error('Error en el servicio:', error);
        return throwError(error);
      })
    );
  }

  loginAdmin(data: AdminsModel): Observable<any> {
    return this.http.post<any>(`${this.URL}admin/login`, data).pipe(
      catchError(error => {
        console.error('Error en el servicio:', error);
        return throwError(error);
      })
    );
  }

  regUsuario(data: regClienteModel): Observable<any> {
    return this.http.post<any>(`${this.URL}cliente/registrar`, data).pipe(
      catchError(error => {
        console.error('Error en el servicio:', error);
        return throwError(error);
      })
    );
  }
  
  regAdmin(data: regAdminModel): Observable<any> {
    return this.http.post<any>(`${this.URL}admin/registrar`, data).pipe(
      catchError(error => {
        console.error('Error en el servicio:', error);
        return throwError(error);
      })
    );
  }

  regCotizaciones(data: RegCotizacionesModel): Observable<any> {
    return this.http.post<any>(`${this.URL}cotizacion/nueva`, data).pipe(
      catchError(error => {
        console.error('Error en el servicio:', error);
        return throwError(error);
      })
    );
  }

}
