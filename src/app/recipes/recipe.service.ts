import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  //private recipes: Recipe[] = [
  //  new Recipe(
  //    'Chicken and mushroom Pie',
  //    'Chicken and mushroom pie is a common British pie, ranked as one of the most popular types of savoury pie in Great Britain and often served in fish and chips restaurants.',
  //    'https://upload.wikimedia.org/wikipedia/commons/f/f2/Chicken_Pie.JPG',
  //    [
  //      new Ingredient('Chicken', 1),
  //      new Ingredient('Mushrooms', 4),
  //      new Ingredient('Onions', 2),
  //      new Ingredient('Sauce', 5),
  //      new Ingredient('Puff pastry', 8),
  //    ]
  //  ),
  //  new Recipe(
  //    'Pizza',
  //    'Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.',
  //    'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
  //    [
  //      new Ingredient('Chicken', 1),
  //      new Ingredient('Pepperoni', 20),
  //      new Ingredient('Onions', 2),
  //      new Ingredient('Sauce', 5),
  //      new Ingredient('Cheese', 10),
  //    ]
  //  ),
  //];
  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, updatedRecipe: Recipe) {
    this.recipes[index] = updatedRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
