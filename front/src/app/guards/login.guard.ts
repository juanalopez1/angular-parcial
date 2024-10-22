import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const localService = inject(LocalStorageService);
  const router = inject(Router);

  if(localService.isThereUser()){
    return true
  }
  router.navigate(['login']);
  return false;
};
