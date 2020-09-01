import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../../auth/auth.service'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {
  public email: string
  public name: string
  public message: string
  public errorMessage: string
  public showSuccessMessage: boolean

  constructor(private auth: AuthService, private http: HttpClient) {
    this.errorMessage = null
    this.showSuccessMessage = false
    this.email = auth.getUser()?.email
    this.name = auth.getUser()?.name
  }

  ngOnInit() {}

  onSubmit() {
    this.http
      .post(`${environment.apiBaseUrl}/contact`, {
        email: this.email,
        name: this.name,
        message: this.message
      })
      .toPromise()
      .then(() => {
        this.showSuccessMessage = true
        this.errorMessage = null
        this.email = null
        this.name = null
        this.message = null
      })
      .catch(() => {
        this.showSuccessMessage = false
        this.errorMessage = 'Doslo je do greske prilikom slanja poruke.'
      })
  }
}
