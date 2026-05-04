import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { IFilm } from '../interfaces/IFilm';
import filmsData from '../assets/films.json';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {

  private films: WritableSignal<IFilm[]> = signal<IFilm[]>(filmsData as IFilm[]);

  allFilms: Signal<IFilm[]> = computed<IFilm[]>(() => this.films());

  favoriteFilms: Signal<IFilm[]> = computed<IFilm[]>(() => {
    return this.films().filter((f: IFilm) => f.isFavorite);
  });

  getFilmById(id: number): IFilm | undefined {
    return this.films().find((film: IFilm) => film.id === id);
  }

  toggleFavorite(id: number): void {
    const updatedFilms: IFilm[] = this.films().map((film: IFilm) => {
      if (film.id === id) {
        return { ...film, isFavorite: !film.isFavorite };
      }
      return film;
    });
    this.films.set(updatedFilms);
  }

}
