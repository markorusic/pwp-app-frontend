import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Ad } from '../types'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AdService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Ad[]> {
    return this.http.get<Ad[]>(`${environment.apiBaseUrl}/ads`)
  }

  public getMyAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>(`${environment.apiBaseUrl}/findMyAds`)
  }

  public create(ad): Observable<Ad> {
    return this.http.post<Ad>(`${environment.apiBaseUrl}/ads`, ad)
  }

  public update(ad): Observable<Ad> {
    return this.http.put<Ad>(
      `${environment.apiBaseUrl}/updateAd/${ad['id']}`,
      ad
    )
  }

  public delete(ad): Observable<Ad> {
    return this.http.delete<Ad>(
      `${environment.apiBaseUrl}/deleteAd/${ad['id']}`
    )
  }
}
