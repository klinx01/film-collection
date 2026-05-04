import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { IBreadcrumb } from '../interfaces/IBreadcrumb';
import { FilmsService } from '../service/films.service';
import { IFilm } from '../interfaces/IFilm';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent implements OnInit {
  private router: Router = inject(Router);
  private filmsService: FilmsService = inject(FilmsService);

  breadcrumbs: WritableSignal<IBreadcrumb[]> = signal<IBreadcrumb[]>([]);

  ngOnInit(): void {
    this.setBreadcrumbs();

    this.router.events.subscribe(() => {
      this.setBreadcrumbs();
    });
  }

  private setBreadcrumbs(): void {
    const url: string = this.router.url;

    if (url === '/') {
      this.breadcrumbs.set([{ label: 'Home', path: '/' }]);
      return;
    }

    if (url.startsWith('/films/')) {
      const id: number = Number(url.replace('/films/', ''));
      const film: IFilm | undefined = this.filmsService.getFilmById(id);

      this.breadcrumbs.set([
        { label: 'Home', path: '/' },
        { label: film?.title ?? 'Film' }
      ]);
      return;
    }

    this.breadcrumbs.set([{ label: 'Home', path: '/' }]);
  }
}