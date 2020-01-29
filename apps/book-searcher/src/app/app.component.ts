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
  private searchValue = '';

  constructor(private googleBooksService: GoogleBooksService) {}

  onSearch({searchValue, queryParam}) {
    if(searchValue) this.searchValue = searchValue;
    this.googleBooksService.fetchVolumes(searchValue, queryParam).subscribe((res) => {
      console.log(res);
      this.books = res.items;
      this.booksTotal = res.totalItems;
    });
  }

  onPaginate(event: number) {
    this.onSearch({searchValue: this.searchValue, queryParam: {startIndex: event} });
  }
}
