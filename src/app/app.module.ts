import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SearchComponent } from './components/pages/search/search.component';
import { FoodCardComponent } from './components/pages/home/food-card/food-card.component';
import { RandomFoodService } from './services/random-food/random-food.service';
import { SingleRecipeComponent } from './components/pages/single-recipe/single-recipe.component';
import { MainInformationComponent } from './components/pages/single-recipe/main-information/main-information.component';
import { SimilarRecipeComponent } from './components/pages/single-recipe/main-information/similar-recipe/similar-recipe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    FoodCardComponent,
    SingleRecipeComponent,
    MainInformationComponent,
    SimilarRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RandomFoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
