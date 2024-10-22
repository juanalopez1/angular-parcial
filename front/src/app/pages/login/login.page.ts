import { Component, inject } from '@angular/core';
import { ThemesService } from '../../services/themes.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css'
})
export class LoginPage {
  authService = inject(AuthService);
  themesService = inject(ThemesService);

  private router: Router = inject(Router);

  username : string = '';
  contrasena : string = '';

  public async onSubmit(){
    const user = await this.authService.login(this.username, this.contrasena);
    this.router.navigate(['themes']);
  }
}
