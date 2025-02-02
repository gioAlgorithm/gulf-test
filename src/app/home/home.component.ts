import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../components/search/search.component';
import { ResultsComponent } from '../components/results/results.component';
import { GithubService } from '../services/github.service';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router and ActivatedRoute

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ResultsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [GithubService],
})
export class HomeComponent implements OnInit {
  repositories: any[] = [];
  loading = false;
  noResultsMessage: string =
    "You haven't searched for anything yet. Please enter a query!";
  query: string = '';
  cardActive = true; //default view is card

  constructor(
    private githubService: GithubService,
    private activatedRoute: ActivatedRoute, // Inject ActivatedRoute
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    // Check if there's a query parameter in the URL
    this.activatedRoute.queryParams.subscribe((params) => {
      this.query = params['query'] || ''; // Get the query parameter from the URL
      if (this.query) {
        this.onSearch(this.query); // Trigger search if query exists
      }
    });
  }

  onSearch(query: string) {
    if (!query) {
      this.noResultsMessage = 'Please enter a search query!';
      this.repositories = [];
      this.loading = false;
      return;
    }
    this.noResultsMessage = ''; // Clear the message if query is present
    this.loading = true;

    // Update the URL with the query parameter
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { query }, // Add the query parameter to the URL
      queryParamsHandling: 'merge', // Merge with existing query params if any
    });

    this.githubService.searchRepositories(query).subscribe((results) => {
      this.repositories = results;
      this.loading = false;
      if (this.repositories.length === 0) {
        this.noResultsMessage = 'No repositories found.';
      }
    });
  }

  // whenever user is typing the loading will show up
  onTyping(isTyping: boolean) {
    this.loading = isTyping;
  }

  // for the card view to change the styles
  toggleView(isCardActive: boolean) {
    console.log('Button clicked:', isCardActive); // Debug log
    this.cardActive = isCardActive;
    console.log(this.cardActive ? 'Card view active' : 'Table view active');
  }
}
