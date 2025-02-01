import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card } from '../../models/card.type';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [RouterModule, NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() repo!: Card;

  // rendering random color for the cards background div
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
