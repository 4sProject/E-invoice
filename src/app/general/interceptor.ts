import { Observable } from 'rxjs';
import { Hellper } from './hellper';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class Interceptor extends Hellper implements HttpInterceptor {
//#region  Declrations
  //#endregion
  //#region Constructor
  constructor() { 
    super();
  }
  //#endregion
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let Scope = this.loginData.scope !== '' ? this.loginData.scope + ' ' + this.loginData.scope : 'Scope ' + this.loginData.scope;
    let Authorization = this.loginData.token_type !== '' ? this.loginData.token_type + ' ' + this.loginData.access_token : 'Bearer ' + this.loginData.access_token;
    return next.handle(httpRequest.clone({ setHeaders: { Scope, Authorization } })).pipe(map((data: any) => { return data }));
  }
}