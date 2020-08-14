import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HerosComponent} from './components/heros/heros.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {HeroSearchComponent} from './components/hero-search/hero-search.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heros', component: HerosComponent},
  {path: 'hero-detail/:id', component: HeroDetailComponent},
  {path: 'hero-search/:heroName', component: HeroSearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
