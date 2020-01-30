import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../models/google-books.model';
import { PageEvent, Sort } from '@angular/material';

@Component({
  selector: 'kor-workspace-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input('books') set books(books: Item[]) {
    this._books = books;
    this.sortedBooks = books;
  }
  get books() {
    return this._books;
  }
  @Input() public booksTotal: number;
  @Output() public paginateEvent = new EventEmitter();

  public sortedBooks: Item[];
  private _books: Item[];

  changePage(pageEvent: PageEvent) {
    console.log(pageEvent);
    this.paginateEvent.emit(pageEvent.pageIndex * pageEvent.pageSize);

  }

  sortData(sort: Sort) {
    const data = this.books.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedBooks = data;
      return;
    }

    this.sortedBooks = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return compare(a.volumeInfo.title, b.volumeInfo.title, isAsc);
        case 'author': return compare(a.volumeInfo.authors[0], b.volumeInfo.authors[0], isAsc);
        default: return 0;
      }
    });
  }

  viewBook(previewLink) {
    window.open(previewLink, '_blank')
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
