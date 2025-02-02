import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/github.service';
import { Observable } from 'rxjs';
import { Details } from '../models/details.type';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  repositoryDetails$: Observable<Details> | undefined;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    const repoName = this.route.snapshot.paramMap.get('repoName');
    const owner = this.route.snapshot.paramMap.get('owner');

    if (repoName && owner) {
      this.repositoryDetails$ = this.githubService.getRepositoryDetails(
        owner,
        repoName
      );
    }
  }
}
