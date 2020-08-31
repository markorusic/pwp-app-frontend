import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AdService } from '../ad.service';
import { Ad } from '../Ad';

@Component({
  selector: 'app-svi-oglasi',
  templateUrl: './svi-oglasi.component.html',
  styleUrls: ['./svi-oglasi.component.css']
})
export class SviOglasiComponent implements OnInit {

  public ads: Ad[];

  constructor(
    private adService: AdService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.adService.getAll()
      .subscribe(
        ads => {
          this.ads = ads
        }
      )
  }

  deleteAd(ad: Ad) {
    if (!confirm('Da li ste sigurni da zelite da obrisete ovaj oglas?')) {
      return;
    }
    const index = this.ads.findIndex(a => a.id === ad.id);
    this.adService.delete(ad)
      .subscribe(
        () => {
          this.ads.splice(index, 1);
          // this.successMessage = 'Uspesno obrisan oglas!';
          // this.errorMessage = null;
          // this.hideSuccessMessage();
        },
        error => {
          console.log(error);
          // this.errorMessage = 'Doslo je do greske prilikom brisanja oglasa.';
        }
      );
  }

}
