import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class GoogleBooksService {
  constructor(
    private http: HttpClient
  ) {}

  public fetchVolumes(searchTerm: string): Observable<any> {
    const url = environment.googleBooks+ `/volumes?q=${searchTerm}`;
    return this.http.get<any>(url);
  }

}
