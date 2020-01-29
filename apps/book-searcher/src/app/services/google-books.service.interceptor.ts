import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleBooksConstants } from '../constants/constants';

@Injectable()
export class GoogleBooksServiceInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ params: req.params.set('key', GoogleBooksConstants.API_KEY) });
    return next.handle(req);
  }
}
