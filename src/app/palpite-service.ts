import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Palpite } from './palpite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PalpiteService {

  private apiUrl = 'http://localhost:8080/palpites';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Palpite[]> {
    return this.http.get<Palpite[]>(this.apiUrl);
  }

  getById(id: number): Observable<Palpite> {
    return this.http.get<Palpite>(`${this.apiUrl}/${id}`);
  }

  save(palpite: Palpite): Observable<Palpite> {
    return this.http.post<Palpite>(this.apiUrl, palpite);
  }

  update(id: number, palpite: Palpite): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, palpite);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
