import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  private localStorage = inject(LocalStorageService);

  private getToken() {
    return this.localStorage.getUserData()?.token;
  }

  public baseURL = 'http://localhost/back/' as const;

  async get<T>(url: string) {
    let result: Response | undefined = undefined;
    try {
      result = await fetch(this.baseURL + url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.getToken()}`,
        },
      });
    } catch (e) {
      throw e;
    } finally {
      if (!result || !result.ok) {
        throw result;
      }

      return (await result.json()) as T;
    }
  }

  async post<T>(url: string, body?: unknown) {
    let result: Response | undefined = undefined;
    try {
      result = await fetch(this.baseURL + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.getToken()}`,
        },
        body: JSON.stringify(body),
      });
    } catch (e) {
      throw e;
    } finally {
      if (!result || !result.ok) {
        throw result;
      }

      return (await result.json()) as T;
    }
  }

  async put<T>(url: string, body?: unknown) {
    let result: Response | undefined = undefined;
    try {
      result = await fetch(this.baseURL + url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.getToken()}`,
        },
        body: JSON.stringify(body),
      });
    } catch (e) {
      throw e;
    } finally {
      if (!result || !result.ok) {
        throw result;
      }

      return (await result.json()) as T;
    }
  }

  async delete<T>(url: string, body?: unknown) {
    let result: Response | undefined = undefined;
    try {
      result = await fetch(this.baseURL + url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.getToken()}`,
        },
        body: JSON.stringify(body),
      });
    } catch (e) {
      throw e;
    } finally {
      if (!result || !result.ok) {
        throw result;
      }

      return (await result.json()) as T;
    }
  }
}
