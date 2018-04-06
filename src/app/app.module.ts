import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {GroceryListComponent} from './grocery-list/grocery-list.component';
import { ItemDetailsComponent } from './grocery-list/item-details/item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    GroceryListComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
