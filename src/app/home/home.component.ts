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
  providers: [GithubService]
})
export class HomeComponent {
  repositories: any[] = [];
  loading = false;
  noResultsMessage: string = 'You haven\'t searched for anything yet. Please enter a query!';

  constructor(private githubService: GithubService) {}

  onSearch(query: string) {
    if (!query) {
      this.noResultsMessage = 'Please enter a search query!';
      this.repositories = [];
      this.loading = false;
      return;
    }
    this.noResultsMessage = ''; // Clear the message if query is present
    this.loading = true;
    this.githubService.searchRepositories(query).subscribe(results => {
      this.repositories = results;
      this.loading = false;
      if (this.repositories.length === 0) {
        this.noResultsMessage = 'No repositories found.';
      }
    });
  }

  onTyping(isTyping: boolean) {
    this.loading = isTyping;
  }
}



