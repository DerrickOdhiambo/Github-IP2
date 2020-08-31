import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GitServiceService {
  constructor(private http: HttpClient) {}

  searchUser(username): Observable<any> {
    return this.http
      .get(
        `https://api.github.com/users/${username}?token=${environment.apiKey}`
      )
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error) {
    return throwError(error.message || 'Server Error');
  }
}
