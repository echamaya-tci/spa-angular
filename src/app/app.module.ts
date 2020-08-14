import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Rutas
import {APP_ROUTING} from './app.routes';

// Servicios
// Componentes
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HerosComponent} from './components/heros/heros.component';
import {HerosService} from './services/heros/heros.service';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HerosComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroCardComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
