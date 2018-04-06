import {Routes} from '@angular/router';
import {GroceryListComponent} from './grocery-list.component';
import {ItemDetailsComponent} from './item-details/item-details.component';

export const itemDetailsRoutes: Routes = [
  {path: 'item/:name', component: ItemDetailsComponent}
];

export const groceryListRoutes: Routes = [
  {path: 'groceries', component: GroceryListComponent, children: itemDetailsRoutes}
];
