import { Component, EventEmitter, Output } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';

@Component({
  selector: 'kor-workspace-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() public searchEvent = new EventEmitter();
  public searchValue = '';

  constructor(private googleBooksService: GoogleBooksService) {}

  private searchBooks() {
    this.googleBooksService.fetchVolumes(this.searchValue).subscribe((res) => {
      this.searchEvent.emit(res);
    })
  }
}
