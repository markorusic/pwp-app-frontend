import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'

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

  constructor(private auth: AuthService) {
    this.errorMessage = null
    this.showSuccessMessage = false
    this.email = auth.getUser()?.email
    this.name = auth.getUser()?.name
  }

  ngOnInit() {}

  onSubmit() {
    Promise.resolve()
      .then(() => {
        this.errorMessage = null
        this.showSuccessMessage = true
        this.email = null
        this.name = null
        this.message = null
      })
      .catch(() => {
        this.errorMessage = 'Doslo je do greske prilikom slanja poruke.'
      })
  }
}
