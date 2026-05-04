import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavigation } from '../interfaces/INavigation';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  navigations: INavigation[] = [
    { id: 'home', name: 'Home', path: '/' },
  ];

}
