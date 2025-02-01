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
  @Output() typing = new EventEmitter<boolean>(); // Emit typing state

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(query => {
        this.typing.emit(false); // Stop loading after debounce
        if (query) {
          this.searchQuery.emit(query);
        }
      });
  }

  onInput() {
    this.typing.emit(true); // Trigger loading when typing starts
  }
}


