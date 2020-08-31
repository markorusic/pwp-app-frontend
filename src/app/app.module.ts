import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './auth/auth.interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddOglasComponent } from './add-oglas/add-oglas.component';
import { SviOglasiComponent } from './svi-oglasi/svi-oglasi.component';
import { HeadingComponent } from './heading/heading.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { KontaktComponent } from './kontakt/kontakt.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './profil/profil.component';
import { AdItemComponent } from './profil/ad-item/ad-item.component';
import { CreateAdComponent } from './profil/create-ad/create-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
      multi: true,
    },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
