import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GitServiceService {
  constructor(private http: HttpClient) {}
  getUserData(): Observable<any> {
    return this.http.get(
      `https://api.github.com/users?token=${environment.apiKey}`
    );
  }
  searchUser(username): Observable<any> {
    return this.http.get(
      `https://api.github.com/users/${username}?token=${environment.apiKey}`
    );
  }
}
