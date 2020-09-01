import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Repo } from './classes/repo';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  repositories: Repo;
  constructor(private http: HttpClient) {}

  // repoRequest() {
  //   interface ApiResponse {}
  //   let promise = new Promise((resolve, reject) => {
  //     this.http
  //       .get<ApiResponse>(
  //         `https://api.github.com/users/token=${environment.apiKey}`
  //       )
  //       .toPromise()
  //       .then(
  //         (response) => {
  //           console.log(response);

  //           resolve();
  //         },
  //         (error) => {
  //           reject(error);
  //         }
  //       );
  //   });
  //   return promise;
  // }

  apiKey: String;

  getUserData(userName: string): Observable<any> {
    return this.http.get(
      `https://api.github.com/users/${userName}/repos?token=${environment.apiKey}`
    );
  }

  getRepo(repoName: any) {
    return this.http
      .get(
        `https://api.github.com/search/repositories?q=${repoName}&order=asc?${environment.apiKey}`
      )
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error) {
    return throwError(error.message || 'Server Error');
  }
}
