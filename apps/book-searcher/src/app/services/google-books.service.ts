import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GoogleBooksModel } from '../models/google-books.model';

@Injectable()
export class GoogleBooksService {
  constructor(
    private http: HttpClient
  ) {}

  public fetchVolumes(searchTerm: string, query?: any): Observable<GoogleBooksModel> {
    const url = environment.googleBooks+ `/volumes?q=${searchTerm}`;
    return this.http.get<GoogleBooksModel>(url, {params: query});
  }

}
