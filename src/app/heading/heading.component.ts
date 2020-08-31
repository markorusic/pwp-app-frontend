import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  public isAuthenticated: boolean;

  constructor(private auth: AuthService) {
    this.isAuthenticated = this.auth.isAuthenticated();
  }

  ngOnInit() {
  }

}
