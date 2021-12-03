import { Injectable } from '@angular/core';
import { Config, Login, Usuario } from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = environment.apiUrl + '/api/usuario';
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) {
  }

  obtenerUsuario(id: number) {
    return this.http.get<Usuario>(this.url + '/' + id);
  }

  autenticar(login: Login) {
    return this.http.post<Usuario>(this.url + '/autenticar', login, {headers: this.headers});
  }

  crearUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.url + '/crear', usuario);
  }

  editarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.url + '/editar', usuario);
  }

  eliminarUsuario(id: number) {
    return this.http.delete<Usuario>(this.url + '/eliminar/' + id);
  }

}
