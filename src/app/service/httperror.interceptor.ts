import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

declare let alertify:any;
 
@Injectable(
  {
    providedIn:'root'
  }
)
@Injectable()
export class HttperrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Http request started");
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse)=>{
       // console.log(error);
        alertify.alert(error.error.token);
        return throwError(error.error);
      })
    )
  }
}
