import { Routes } from '@angular/router';
import { FilmCatalogComponent } from '../film-catalog/film-catalog.component';
import { FilmDetailsPageComponent } from '../film-details-page/film-details-page.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', component: FilmCatalogComponent },
  { path: 'films/:id', component: FilmDetailsPageComponent },
  { path: '**', component: NotFoundPageComponent }
];
