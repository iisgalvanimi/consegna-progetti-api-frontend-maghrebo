import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private apiUrl: string = 'https://world.openfoodfacts.org/cgi/search.pl';  // Modifica l'URL in base alla tua API

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    const url = `${this.apiUrl}?search_terms=${encodeURIComponent(query)}`; //Modificato da me per vedere la ricerca
    return this.http.get<any>(url);
  }
}
