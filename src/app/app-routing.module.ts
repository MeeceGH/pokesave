import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonShowcaseComponent } from './components/pokemon-showcase/pokemon-showcase.component';

const appRoutes: Routes = [
  { path: 'pokemon-list', component: PokemonShowcaseComponent },
  { path: 'favorites', component: PokemonShowcaseComponent },
  { path: '**', redirectTo: 'pokemon-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
