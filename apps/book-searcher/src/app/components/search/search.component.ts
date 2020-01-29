import { Component } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';

@Component({
  selector: 'kor-workspace-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchValue = '';

  constructor(private googleBooksService: GoogleBooksService) {}

  private searchBooks() {
    this.googleBooksService.fetchVolumes(this.searchValue).subscribe((res) => {
      console.log(res);
    })
  }
}
