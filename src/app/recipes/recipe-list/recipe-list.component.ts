import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'testing recipe item list',
      'https://c4.wallpaperflare.com/wallpaper/575/606/569/legs-meat-chicken-dish-wallpaper-thumb.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
