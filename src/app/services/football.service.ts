import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  
  
  private apiUrl = 'https://free-api-live-football-data.p.rapidapi.com';

  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '6c39a26524mshbf731d1eda3e4dcp17d389jsn3bcd5c5806c8',
    'X-RapidAPI-Host': 'free-api-live-football-data.p.rapidapi.com'
  });

  constructor(private http: HttpClient) {}

  getMatchData(): Observable<any> {
    const params = new HttpParams()
      .set('league', '39') // Example parameter; depends on your API
      .set('season', '2025'); // Replace with actual parameters required

    return this.http.get<any>(`${this.apiUrl}/football-current-live`, { headers: this.headers, params });
  }
}
