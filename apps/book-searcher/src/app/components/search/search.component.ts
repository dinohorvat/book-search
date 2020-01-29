import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';

@Component({
  selector: 'kor-workspace-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private googleBooksService: GoogleBooksService) {
    this.googleBooksService.fetchVolumes('test').subscribe((res) => {
      console.log(res);
    })
  }

  ngOnInit() {
  }


  searchBooks(value: string) {
    this.googleBooksService.fetchVolumes(value).subscribe((res) => {

    })
  }
}
