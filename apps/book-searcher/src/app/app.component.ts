import { Component } from '@angular/core';
import { GoogleBooksService } from './services/google-books.service';

@Component({
  selector: 'kor-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private googleBooksService: GoogleBooksService) {
    this.googleBooksService.fetchVolumes().subscribe((res) => {
      console.log(res);
    })
  }
  title = 'book-searcher';
}
