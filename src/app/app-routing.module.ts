import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {groceryListRoutes} from './grocery-list/grocery-list-routing';

const routes: Routes = [
  ...groceryListRoutes,
  {path: '', component: WelcomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
