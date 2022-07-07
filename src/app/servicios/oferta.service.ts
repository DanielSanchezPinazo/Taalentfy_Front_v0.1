import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private url = 'https://127.0.0.1:8000/oferta/';

  constructor(private HttpClient: HttpClient) { }

  getOferta(): Observable<any> {

    return this.HttpClient.get(this.url);
  }

  newOferta(respuesta: any): Observable<any> {

    return this.HttpClient.post(this.url + 'new', respuesta);
  } 
 
  updateOferta(id: number, respuesta: any): Observable<any> {

    return this.HttpClient.put(this.url + id + '/edit', respuesta);
  }

  deleteOferta(id: number): Observable<any> {

    return this.HttpClient.delete(this.url + id);
  }
}
