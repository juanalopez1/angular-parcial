import { inject, Injectable } from '@angular/core';
import { FetchService } from './fetch.service';
import { LocalStorageService } from './local-storage.service';

interface Theme {
  "id_tema": number,
  "id_usuario": number,
  "titulo": string,
  "descripcion": string,
  "creador": string
}

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private apiService = inject(FetchService);
  private localStorage = inject(LocalStorageService);

  public async getFromUser(): Promise<Theme[]> {
    const userId = this.localStorage.getUserData()?.usuario.id_usuario;

    return await this.apiService.get<Theme[]>(`usuarios/${userId}/temas/`);
  }
}
