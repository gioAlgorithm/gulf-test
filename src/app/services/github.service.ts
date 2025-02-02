import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Details } from '../models/details.type';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private BASE_URL = 'https://api.github.com/search/repositories?q=';
  private REPO_URL = 'https://api.github.com/repos/';

  constructor(private http: HttpClient) {}

  // for search
  searchRepositories(query: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}${query}`).pipe(
      map((response: any) => response.items)
    );
  }

  // Fetch repository details by ID
  getRepositoryDetails(owner: string, repoName: string): Observable<Details> {
    return this.http.get<Details>(`${this.REPO_URL}${owner}/${repoName}`);
  }
}
