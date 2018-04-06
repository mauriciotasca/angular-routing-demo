import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  groceryList = ['Banana', 'Milk', 'Coffee', 'Rice'] as string[];

  constructor() { }

  ngOnInit() {
  }

}
