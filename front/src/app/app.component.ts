import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FetchService } from './services/fetch.service';
import { AuthService } from './services/auth.service';
import { ThemesService } from './services/themes.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
