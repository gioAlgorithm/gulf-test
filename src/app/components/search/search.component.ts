import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterModule, ReactiveFormsModule], 
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchControl = new FormControl('');
  
  @Output() searchQuery = new EventEmitter<string>();

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(500)) // Add debouncing to reduce API calls
      .subscribe(query => {
        if (query) {
          this.searchQuery.emit(query);
        }
      });
  }
}


