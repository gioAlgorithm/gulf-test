import { Component } from '@angular/core';
import { SearchComponent } from '../components/search/search.component';
import { ResultsComponent } from '../components/results/results.component';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ResultsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [GithubService] // Provide the service
})
export class HomeComponent {
  repositories: any[] = [];

  constructor(private githubService: GithubService) {}

  onSearch(query: string) {
    this.githubService.searchRepositories(query).subscribe(results => {
      this.repositories = results;
    });
  }
}

