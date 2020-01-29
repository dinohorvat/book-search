import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../models/google-books.model';

@Component({
  selector: 'kor-workspace-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() public books: Item[];
  @Input() public booksTotal: number;

  @Output() public searchEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    
  }

}
