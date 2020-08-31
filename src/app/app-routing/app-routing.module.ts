import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SviOglasiComponent } from '../svi-oglasi/svi-oglasi.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { KontaktComponent } from '../kontakt/kontakt.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProfilComponent } from '../profil/profil.component';

import {
  AuthGuardService as AuthGuard
} from '../auth/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'svi-oglasi',
    component: SviOglasiComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'kontakt',
    component: KontaktComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registracija',
    component: RegisterComponent
  },
  {
    path: 'profil',
    component: ProfilComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
