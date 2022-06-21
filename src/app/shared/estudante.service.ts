import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private http: HttpClient) { }

  getEstudantes(): Observable<any> {
    return this.http.get("http://localhost:3000/estudantes");
  }
  
}
