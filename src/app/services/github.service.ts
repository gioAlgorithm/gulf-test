import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubService {
  private BASE_URL = 'https://api.github.com/search/repositories?q=';

  constructor(private http: HttpClient) {}

  searchRepositories(query: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}${query}`).pipe(
      map((response: any) => response.items)
    );
  }
}
