import { Component } from '@angular/core';
import { Item } from './models/google-books.model';
import { GoogleBooksService } from './services/google-books.service';

@Component({
  selector: 'kor-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books: Item[];
  booksTotal: number;
  title = 'book-searcher';

  constructor(private googleBooksService: GoogleBooksService) {}

  onSearch(event: string) {
    this.googleBooksService.fetchVolumes(event).subscribe((res) => {
      this.books = res.items;
      this.booksTotal = res.totalItems;
    });

  }
}
