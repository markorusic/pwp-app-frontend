import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutusComponent } from '../components/aboutus/aboutus.component'
import { SviOglasiComponent } from '../components/svi-oglasi/svi-oglasi.component'
import { KontaktComponent } from '../components/kontakt/kontakt.component'
import { LoginComponent } from '../components/login/login.component'
import { RegisterComponent } from '../components/register/register.component'
import { ProfilComponent } from '../components/profil/profil.component'

import { AuthGuardService as AuthGuard } from '../auth/auth-guard.service'

export const routes: Routes = [
  {
    path: '',
    component: SviOglasiComponent
  },
  {
    path: 'o-nama',
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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
