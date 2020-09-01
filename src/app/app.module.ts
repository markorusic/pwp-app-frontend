import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service'
import { AuthService } from './auth/auth.service'
import { AuthInterceptor } from './auth/auth.interceptor'
import { AppComponent } from './app.component'
import { AddOglasComponent } from './components/add-oglas/add-oglas.component'
import { SviOglasiComponent } from './components/svi-oglasi/svi-oglasi.component'
import { HeadingComponent } from './components/heading/heading.component'
import { FooterComponent } from './components/footer/footer.component'
import { AboutusComponent } from './components/aboutus/aboutus.component'
import { KontaktComponent } from './components/kontakt/kontakt.component'
import { AppRoutingModule } from './app-routing/app-routing.module'
import { HttpModule } from '@angular/http'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { ProfilComponent } from './components/profil/profil.component'
import { AdItemComponent } from './components/profil/ad-item/ad-item.component'
import { CreateAdComponent } from './components/profil/create-ad/create-ad.component'

@NgModule({
  declarations: [
    AppComponent,
    AddOglasComponent,
    SviOglasiComponent,
    HeadingComponent,
    FooterComponent,
    AboutusComponent,
    KontaktComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    AdItemComponent,
    CreateAdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
