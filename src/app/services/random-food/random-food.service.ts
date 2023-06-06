import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomFoodService {
  constructor(private http: HttpClient) { }
  
  listRandomFood(take: number){
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=bcf95defb89a4a1c9e94a65d6bf474da&number=${take}`

    return this.http.get(apiUrl)
  }
}
