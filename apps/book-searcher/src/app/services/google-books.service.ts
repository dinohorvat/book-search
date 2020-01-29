import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class GoogleBooksService {
  constructor(
    private http: HttpClient
  ) {}

  public fetchVolumes(): Observable<any> {
    const url = environment.googleBooks+ '/volumes?q=q=quilting&key=AIzaSyBqwT_L7hrR0S76d-FAwtwaMn6hOBUjhug';
    return this.http.get<any>(url);
  }

}
