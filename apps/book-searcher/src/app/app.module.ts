import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleBooksService } from './services/google-books.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { GoogleBooksServiceInterceptor } from './services/google-books.service.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, SearchResultsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatCardModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GoogleBooksServiceInterceptor,
      multi: true
    },
    GoogleBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
