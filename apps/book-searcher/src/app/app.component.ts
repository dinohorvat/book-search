import { Component } from '@angular/core';
import { GoogleBooksModel, Item } from './models/google-books.model';

@Component({
  selector: 'kor-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books: Item[];
  title = 'book-searcher';

  onSearch(event: GoogleBooksModel) {
    console.log(event);
    this.books = event.items;
  }
}
