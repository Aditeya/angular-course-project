import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipesEditComponent,
  ],
  imports: [RecipesRoutingModule, CommonModule, ReactiveFormsModule],
})
export class RecipesModule {}
