import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'testing recipe item list',
      'https://c4.wallpaperflare.com/wallpaper/575/606/569/legs-meat-chicken-dish-wallpaper-thumb.jpg'
    ),
    new Recipe(
      'Another test Recipe',
      'testing recipe item list',
      'https://c4.wallpaperflare.com/wallpaper/575/606/569/legs-meat-chicken-dish-wallpaper-thumb.jpg'
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
