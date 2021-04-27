import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AptHttpInterceptor implements HttpInterceptor {
  token: String = '';
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.token != '') {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${this.token}` },
      });
    }

    return next.handle(req).pipe(
      tap(
        (evt: HttpEvent<any>) => {
          if (evt instanceof HttpResponse) {
            let tab: Array<String>;
            let enteteAuthorization = evt.headers.get('Authorization');
            if (enteteAuthorization != null) {
              tab = enteteAuthorization.split(/Bearer\s+(.*)$/i);
              if (tab.length > 1) {
                this.token = tab[1];
              }
            }
          }
        },
        (error: HttpErrorResponse) => {
          switch (error.status) {
            case 401:
              this.router.navigate(['/connexion']);
              break;
            default:
              console.log('ERROR !!!!!');
          }
        }
      )
    );
  }
}
