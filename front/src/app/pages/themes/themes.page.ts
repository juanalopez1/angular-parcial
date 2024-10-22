import { Component, inject } from '@angular/core';
import { FetchService } from '../../services/fetch.service';
import { ThemesService } from '../../services/themes.service';

export interface Theme {
  id_tema: number;
  id_usuario: number;
  titulo: string;
  descripcion: string;
  creador: string;
}

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [],
  templateUrl: './themes.page.html',
  styleUrl: './themes.page.css',
})
export class ThemesPage {
  private themesService = inject(ThemesService);

  allThemes : Theme[] | undefined = []

  async ngOnInit(){
    this.allThemes = await this.themesService.getThemes();
  }
}
