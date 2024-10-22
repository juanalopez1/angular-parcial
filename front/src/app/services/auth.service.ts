import { inject, Injectable } from '@angular/core';
import { FetchService } from './fetch.service';
import { LocalStorageService } from './local-storage.service';

export interface userData {
  "token": string,
  "usuario": {
    "id_usuario": number,
    "username": string,
    "email": string,
    "is_admin": boolean
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiService = inject(FetchService);
  private localStorageService = inject(LocalStorageService);

  public async login(username: string, password: string){
    const response = await this.apiService.post<userData>('auth/', {
      username: username,
      contraseña: password
    }); 

    this.localStorageService.setUserData(response);

    return response

  }

}
