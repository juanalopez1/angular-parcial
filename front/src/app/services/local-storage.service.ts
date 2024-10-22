import { Injectable } from '@angular/core';
import { userData } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public getUserData(): userData | null {
    const data = localStorage.getItem('userData');

    if (!data) {
      return null;
    }

    try {
      return JSON.parse(data) as userData;
    } catch {
      return null;
    }
  }
  public setUserData(userData: userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  public isThereUser(): boolean {
    return !!localStorage.getItem('userData');
  }
}
