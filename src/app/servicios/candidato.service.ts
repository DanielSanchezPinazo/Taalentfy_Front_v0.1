import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private url = 'https://127.0.0.1:8000/candidato/';

  constructor(private HttpClient: HttpClient) { }

  getCandidato(): Observable<any> {

    return this.HttpClient.get(this.url);
  }

  newCandidato(respuesta: any): Observable<any> {

    return this.HttpClient.post(this.url + 'new', respuesta);
  } 
 
  updateCandidato(id: number, respuesta: any): Observable<any> {

    return this.HttpClient.put(this.url + id + '/edit', respuesta);
  }

  deleteCandidato(id: number): Observable<any> {

    return this.HttpClient.delete(this.url + id);
  }

}
