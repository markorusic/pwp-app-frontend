import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public showLoginError: boolean;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.showLoginError = false
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      if (this.auth.isAdmin()) {
        this.router.navigate(['svi-oglasi']);
      } else {
        this.router.navigate(['profil']);
      }
    }
  }

  onSubmit () {
    this.auth.authenticate(this.email, this.password)
      .subscribe(
        () => {
          window.location.reload()
        },
        error => {
          console.log(error)
          this.showLoginError = true;
        }
      )
  }

}
