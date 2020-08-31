import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Ad } from './Ad'

const BASE = 'http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Ad[]> {
    return this.http.get<Ad[]>(`${BASE}/ads`);
  }

  public getMyAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>(`${BASE}/findMyAds`);
  }

  public create(ad): Observable<Ad> {
    return this.http.post<Ad>(`${BASE}/ads`, ad);
  }

  public update(ad): Observable<Ad> {
    return this.http.put<Ad>(`${BASE}/updateAd/${ad['id']}`, ad);
  }

  public delete(ad): Observable<Ad> {
    return this.http.delete<Ad>(`${BASE}/deleteAd/${ad['id']}`);
  }
}
