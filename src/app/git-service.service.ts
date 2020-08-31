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

  apiKey: String = 'c54d354c4ae7ad08f5bf9966b746ca4d95d0a233';

  searchUser(username): Observable<any> {
    return this.http
      .get(`https://api.github.com/users/${username}?token=${this.apiKey}`)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error) {
    return throwError(error.message || 'Server Error');
  }
}
