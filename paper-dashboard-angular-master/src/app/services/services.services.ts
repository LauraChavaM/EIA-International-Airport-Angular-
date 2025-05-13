import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Services } from 'app/models/services.models';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = 'http://localhost:3000/api/services'; // tu backend de servicios

  constructor(private http: HttpClient) { }

  getAll(): Observable<Services[]> {
    return this.http.get<Services[]>(this.apiUrl);
  }

  create(data: Services): Observable<Services> {
    return this.http.post<Services>(this.apiUrl, data);
  }

  update(id: string, data: Services): Observable<Services> {
    return this.http.put<Services>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
