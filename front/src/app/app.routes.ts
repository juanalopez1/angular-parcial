import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { ThemesPage } from './pages/themes/themes.page';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'themes',
        component: ThemesPage,
        canActivate: [loginGuard]
    },
];
