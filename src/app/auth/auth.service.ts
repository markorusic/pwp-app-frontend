import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { User } from '../types'
import { BASE_API_URL } from '../config'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public getUserData() {
    return JSON.parse(localStorage.getItem('userData')) || {}
  }

  public setUserData(userData): void {
    localStorage.setItem('userData', JSON.stringify(userData))
  }

  public getToken(): string {
    return this.getUserData().access_token
  }

  public getUser(): User {
    return this.getUserData().user
  }

  public isAuthenticated(): boolean {
    return !!this.getToken()
  }

  public isAdmin(): boolean {
    const user = this.getUser()
    if (!user) {
      return false
    }
    return user.role === 'admin'
  }

  public authenticate(email: string, password: string): Observable<any> {
    return this.http
      .post(`${BASE_API_URL}/auth/login`, { email, password })
      .pipe(
        tap(userData => {
          this.setUserData(userData)
        })
      )
  }

  public logout(): void {
    localStorage.removeItem('userData')
    window.location.reload()
  }

  public register(userData): Observable<any> {
    return this.http.post(`${BASE_API_URL}/auth/register`, userData)
  }
}
