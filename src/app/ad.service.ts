import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Ad } from './types'
import { BASE_API_URL } from './config'

@Injectable({
  providedIn: 'root'
})
export class AdService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Ad[]> {
    return this.http.get<Ad[]>(`${BASE_API_URL}/ads`)
  }

  public getMyAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>(`${BASE_API_URL}/findMyAds`)
  }

  public create(ad): Observable<Ad> {
    return this.http.post<Ad>(`${BASE_API_URL}/ads`, ad)
  }

  public update(ad): Observable<Ad> {
    return this.http.put<Ad>(`${BASE_API_URL}/updateAd/${ad['id']}`, ad)
  }

  public delete(ad): Observable<Ad> {
    return this.http.delete<Ad>(`${BASE_API_URL}/deleteAd/${ad['id']}`)
  }
}
