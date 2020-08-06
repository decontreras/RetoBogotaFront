import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Location } from '../models/location';

@Injectable({
    providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  url_api = 'http://localhost:8080/RETOBOGOTA-0.0.1-SNAPSHOT/location';

  getAllLocation() {
    return this.http.get(this.url_api);
  }

  saveLocation(location: Location) {
    return this.http
      .post<Location>(this.url_api, location, { headers: this.headers })
      .pipe(map(data => data));
  }

  updateLocation(location: Location) {
    return this.http
      .put<Location>(this.url_api, location, { headers: this.headers })
      .pipe(map(data => data));
  }

  deleteLocation(location: Location) {
    return this.http
      .delete<Location>(this.url_api, { headers: this.headers })
      .pipe(map(data => data));
  }
}