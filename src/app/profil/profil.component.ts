import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AdService } from '../ad.service';
import { User } from '../user';
import { Ad } from '../Ad';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  
  public user: User;
  public ads: Ad[];
  public showCreateNew: boolean;
  public successMessage: string;
  public errorMessage: string;

  constructor(
    private auth: AuthService,
    private adService: AdService,
    private router: Router
  ) {
    this.user = this.auth.getUser();
    this.showCreateNew = false;
    this.successMessage = null;
    this.errorMessage = null;
  }

  ngOnInit() {
    if (this.auth.isAdmin()) {
      this.router.navigate(['svi-oglasi']);
    }
    this.adService.getMyAds()
      .subscribe(
        ads => {
          this.ads = ads
            .map(ad => {
              ad.user = this.user;
              return ad;
            });
        }
      )
  }

  toggleCreateNew() {
    this.showCreateNew = !this.showCreateNew
  }

  hideSuccessMessage() {
    setTimeout(() => {
      this.successMessage = null;
    }, 5000)
  }

  createAd(ad: Ad) {
    this.adService.create(ad)
      .subscribe(
        ad  => {
          this.ads.unshift(ad);
          this.successMessage = 'Uspesno kreiran oglas!';
          this.errorMessage = null;
          this.showCreateNew = false;
          this.hideSuccessMessage();
        },
        error => {
          console.log(error);
          this.errorMessage = 'Doslo je do greske prilikom kreiranja oglasa.';
        }
      );
  }

  updateAd(ad: Ad) {
    this.adService.update(ad)
      .subscribe(
        () => {
          this.ads = this.ads.map(a => a.id === ad.id ? ad : a);
          this.successMessage = 'Uspesno izmenjen oglas!';
          this.errorMessage = null;
          this.hideSuccessMessage();
        },
        error => {
          console.log(error);
          this.errorMessage = 'Doslo je do greske prilikom izmene oglasa.';
        }
      );
  }

  deleteAd(ad: Ad) {
   const index = this.ads.findIndex(a => a.id === ad.id);
   this.adService.delete(ad)
     .subscribe(
       () => {
         this.ads.splice(index, 1);
         this.successMessage = 'Uspesno obrisan oglas!';
         this.errorMessage = null;
         this.hideSuccessMessage();
       },
       error => {
         console.log(error);
         this.errorMessage = 'Doslo je do greske prilikom brisanja oglasa.';
       }
     );
  }

}
