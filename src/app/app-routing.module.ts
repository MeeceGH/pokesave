import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardComponent } from './components/pokemon-showcase/pokemon-card/pokemon-card.component';

const appRoutes: Routes = [
  { path: 'pokemon-list', component: PokemonCardComponent },
  { path: 'favorites', component: PokemonCardComponent },
  { path: '**', redirectTo: 'pokemon-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
