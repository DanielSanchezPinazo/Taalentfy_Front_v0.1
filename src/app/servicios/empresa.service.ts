import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url = 'https://127.0.0.1:8000/empresa/';

  constructor(private HttpClient: HttpClient) { }

  getEmpresa(): Observable<any> {

    return this.HttpClient.get(this.url);
  }

  newEmpresa(respuesta: any): Observable<any> {

    return this.HttpClient.post(this.url + 'new', respuesta);
  } 
 
  updateEmpresa(id: number, respuesta: any): Observable<any> {

    return this.HttpClient.put(this.url + id + '/edit', respuesta);
  }

  deleteEmpresa(id: number): Observable<any> {

    return this.HttpClient.delete(this.url + id);
  }
}
