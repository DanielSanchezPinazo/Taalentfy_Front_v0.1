import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidaturaService {

  private url = 'https://127.0.0.1:8000/candidatura/';

  constructor(private HttpClient: HttpClient) { }

  getCandidatura(): Observable<any> {

    return this.HttpClient.get(this.url);
  }

  newCandidatura(respuesta: any): Observable<any> {

    return this.HttpClient.post(this.url + 'new', respuesta);
  } 
 
  updateCandidatura(id: number, respuesta: any): Observable<any> {

    return this.HttpClient.put(this.url + id + '/edit', respuesta);
  }

  deleteCandidatura(id: number): Observable<any> {

    return this.HttpClient.delete(this.url + id);
  }
}
