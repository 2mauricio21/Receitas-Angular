import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchInterface } from './search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  search(query: string): Observable<SearchInterface> {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=bcf95defb89a4a1c9e94a65d6bf474da&query=${query}&number=10`;

    return this.http.get<SearchInterface>(apiUrl);
  }
}
