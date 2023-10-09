import { Component } from '@angular/core';
import { ingredientModel } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent {
  ingredients: ingredientModel[] = [
    new ingredientModel('Chicken Leg Piece',4),
    new ingredientModel('Biriyani Masala',1)
  ];

}
