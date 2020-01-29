import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'kor-workspace-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() public searchEvent = new EventEmitter();
  public searchValue = '';

  private searchBooks() {
    this.searchEvent.emit(this.searchValue);
  }
}
