import { Component, Input } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, RouterModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() repositories: any[] = [];
}

