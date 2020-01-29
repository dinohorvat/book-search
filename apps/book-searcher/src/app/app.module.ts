import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleBooksService } from './services/google-books.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { MatInputModule } from '@angular/material';
import { GoogleBooksServiceInterceptor } from './services/google-books.service.interceptor';

@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MatInputModule],
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
