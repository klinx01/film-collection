import { Component, computed, inject, Signal, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from '../service/films.service';
import { IFilm } from '../interfaces/IFilm';
import { DurationPipe } from '../pipes/duration.pipe';

@Component({
  selector: 'app-film-details-page',
  imports: [DurationPipe],
  templateUrl: './film-details-page.component.html',
  styleUrl: './film-details-page.component.scss',
})
export class FilmDetailsPageComponent {

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  filmsService: FilmsService = inject(FilmsService);

  filmId: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  film: Signal<IFilm | undefined> = computed<IFilm | undefined>(() => {
    return this.filmsService.getFilmById(this.filmId);
  });

  onBack(): void {
    this.router.navigate(['/']);
  }

  onToggleFavorite(): void {
    this.filmsService.toggleFavorite(this.filmId);
  }

}
