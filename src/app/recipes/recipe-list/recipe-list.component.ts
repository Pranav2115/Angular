import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{
recipesList: RecipeModel[]=[
  new RecipeModel('Biriyani Recipe','Steps for Biriyani making',
  'https://th.bing.com/th/id/OIP.B2GQa3ZlRud90KTQe2RcEwHaEH?w=330&h=183&c=7&r=0&o=5&dpr=1.4&pid=1.7'),
  new RecipeModel('Pizza Recipe','Steps for Pizza making',
  'https://th.bing.com/th/id/OIP.L9wAChJoT39U5ZM_Rn-pcQHaEE?w=332&h=182&c=7&r=0&o=5&dpr=1.4&pid=1.7')
];

}
