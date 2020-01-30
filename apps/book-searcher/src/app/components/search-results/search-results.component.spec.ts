import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { BOOKS_MOCK, BOOKS_TOTAL } from './mock-test-data/books.mock';
import { MatPaginatorModule } from '@angular/material';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatPaginatorModule
      ],
      declarations: [ SearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // @ts-ignore
    component.books = BOOKS_MOCK;
    component.booksTotal = BOOKS_TOTAL;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should filter books alphabetically', () => {
    component.sortData({active: 'title', direction: 'asc'});
    console.log(component.books);
    expect(component.sortedBooks[0].volumeInfo.title).toBe('Dino');
  })
});
