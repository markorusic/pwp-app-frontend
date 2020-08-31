import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email: string;
  public name: string;
  public password: string;
  public confirmPassword: string;
  public address: string;
  public phone: string;
  public registerError: string;
  public showSuccessMessage: boolean;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.registerError = null;
    this.showSuccessMessage = false;
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['profil'])
    }
  }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.registerError = 'Lozinke se ne poklapaju!';
      return;
    }
    this.auth.register({
      email: this.email,
      name: this.name,
      password: this.password,
      address: this.address,
      phone: this.phone
    })
    .subscribe(
      user => {
        this.registerError = null;
        this.showSuccessMessage = true;
      },
      error => {
        console.log(error);
        this.registerError = 'Doslo je do greske prilikom registracije.';
      }
    )
  }

}
