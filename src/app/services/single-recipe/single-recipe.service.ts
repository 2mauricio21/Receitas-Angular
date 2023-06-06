import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SingleRecipeService {
  constructor(private http: HttpClient) {}

  takeRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=bcf95defb89a4a1c9e94a65d6bf474da`;

    return this.http.get(apiUrl);
  }

  takeSimilarRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=bcf95defb89a4a1c9e94a65d6bf474da`;
  
    return this.http.get(apiUrl);
  }
}
