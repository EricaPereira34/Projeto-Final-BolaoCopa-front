import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home-component/home-component';
import { PalpiteComponent } from './palpite-component/palpite-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'palpites', component: PalpiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
