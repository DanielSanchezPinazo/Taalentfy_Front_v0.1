import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = 'https://127.0.0.1:8000/admin/';

  // creamos la variable Subject y una Observable para coger su valor privado

  private userLoggedSubject: BehaviorSubject<any> = new BehaviorSubject({});
  
  public userLogged: Observable<Admin> = this.userLoggedSubject.asObservable();

  
  constructor(private HttpClient: HttpClient) { }

  getAdmin(): Observable<any> {

    return this.HttpClient.get(this.url);
  }

  newAdmin(respuesta: Admin): Observable<any> {

    return this.HttpClient.post(this.url + 'new', respuesta);
  } 
 
  updateAdmin(id: number, respuesta: Admin): Observable<any> {

    return this.HttpClient.put(this.url + id + '/edit', respuesta);
  }

  deleteAdmin(id: number): Observable<any> {

    return this.HttpClient.delete(this.url + id);
  }
// creamos la funcion setUser() que va a posibilitar el servicio para que el usuario logado
// sea inyectado a cualquier elemento  y recuperado con getUser().

  setUser(user: any ): void {

    this.userLoggedSubject.next(user);
  }

  getUser(): Observable<any> {

    return this.userLogged; 
  }

/*   setUser(user: any ): Observable<any> {

    this.userLoggedSubject.next(user);

    return this.userLogged; 
  }   */

}
 