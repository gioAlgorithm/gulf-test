import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card } from '../../models/card.type';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [RouterModule, NgStyle, NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() repo!: Card;
  backgroundColor: string = ''; // Store the random color
  @Input() cardActive!: boolean; // to switch the card style

  ngOnInit() {
    // Generate the random color only once when the component initializes
    this.backgroundColor = this.getRandomColor();
  }

  // Rendering random color for the cards background div
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Truncate text based on the specified limit
  truncateText(text: string, limit: number): string {
    return text && text.length > limit ? text.slice(0, limit - 1) + '…' : text;
  }
}
