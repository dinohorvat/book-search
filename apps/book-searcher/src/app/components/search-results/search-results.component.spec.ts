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

  it('should have books defined', () => {
    expect(component.sortedBooks).toBeDefined();
  });

  it ('should filter books alphabetically in ASC order', () => {
    component.sortData({active: 'title', direction: 'asc'});
    expect(component.sortedBooks[0].volumeInfo.title).toEqual('A Highly Focusing Beta Spectrometer');
  });

  it ('should filter books alphabetically in DESC order', () => {
    component.sortData({active: 'title', direction: 'desc'});
    expect(component.sortedBooks[0].volumeInfo.title).toEqual('XI Censo general de población y vivienda, 1990');
  });

  it ('should filter books alphabetically in default order', () => {
    component.sortData({active: 'title', direction: ''});
    expect(component.sortedBooks[0].volumeInfo.title).toEqual('Dear Dinoo');
  })
});
