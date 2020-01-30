import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'kor-workspace-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() public searchEvent = new EventEmitter();
  public searchValue = '';

  public searchBooks() {
    this.searchEvent.emit({searchValue: this.searchValue});
  }
}
