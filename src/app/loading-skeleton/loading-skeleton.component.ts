import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-loading-skeleton',
  imports: [NgFor],
  templateUrl: './loading-skeleton.component.html',
  styleUrl: './loading-skeleton.component.scss',
})
export class LoadingSkeletonComponent {
  loadingCards = Array.from({ length: 12 });
}
