import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsService } from '../service/films.service';
import { IFilm } from '../interfaces/IFilm';
import { FilmCardComponent } from '../film-card/film-card.component';
import { AutofocusDirective } from '../directives/autofocus.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-film-catalog',
  imports: [FilmCardComponent, AutofocusDirective, FormsModule],
  templateUrl: './film-catalog.component.html',
  styleUrl: './film-catalog.component.scss',
})
export class FilmCatalogComponent {

  private router: Router = inject(Router);
  filmsService: FilmsService = inject(FilmsService);

  searchQuery: WritableSignal<string> = signal<string>('');

  filteredFilms: Signal<IFilm[]> = computed<IFilm[]>(() => {
    const query: string = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.filmsService.allFilms();
    }

    return this.filmsService.allFilms().filter((film: IFilm) => {
      return film.title.toLowerCase().includes(query);
    });
  });

  onSearch(value: string): void {
    this.searchQuery.set(value);
  }

  onToggleFavorite(filmId: number): void {
    this.filmsService.toggleFavorite(filmId);
  }

  onCardClick(filmId: number): void {
    this.router.navigate(['/films', filmId]);
  }

}
