import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule, DatePipe } from '@angular/common'; // Import CommonModule and DatePipe

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    CommonModule,  // Add CommonModule to imports
    DatePipe,      // Register DatePipe as a provider
  ]
};
