import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { IFilm } from '../interfaces/IFilm';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
})
export class FilmCardComponent {

  film: InputSignal<IFilm> = input.required<IFilm>();
  toggleFavorite: OutputEmitterRef<number> = output<number>();
  cardClick: OutputEmitterRef<number> = output<number>();

  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.film().id);
  }

  onCardClick(): void {
    this.cardClick.emit(this.film().id);
  }

}