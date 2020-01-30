import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GoogleBooksService } from './services/google-books.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [GoogleBooksService]

    }).compileComponents();
  }));

  it(`should have as title 'book-searcher'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('book-searcher');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to book-searcher!'
    );
  });
});
