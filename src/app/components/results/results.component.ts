import { Component, Input } from '@angular/core';
import { CommonModule, NgIf, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Card } from '../../models/card.type';
import { CardComponent } from '../card/card.component';
import { LoadingSkeletonComponent } from '../../loading-skeleton/loading-skeleton.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NgClass,
    RouterModule,
    CardComponent,
    LoadingSkeletonComponent,
  ],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  @Input() repositories: Card[] = [];
  @Input() loading: boolean = false; // Add loading input
  @Input() noResultsMessage: string = ''; // Accept the message input
  @Input() cardActive!: boolean; // to switch the style of card
}
