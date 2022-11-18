import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PokemonShowcaseComponent } from './components/pokemon-showcase/pokemon-showcase.component';
import { PokemonCardComponent } from './components/pokemon-showcase/pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './components/pokemon-showcase/pokemon-details/pokemon-details.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonShowcaseComponent,
    PokemonCardComponent,
    PokemonDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
