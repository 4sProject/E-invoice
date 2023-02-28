import { Injectable } from '@angular/core';
import * as generalImports from '../general/general-component-imports';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  //#region  Declrations
  //#endregion
  //#region Constructor
  constructor(public http: generalImports.HttpClient) {
  }
  //#endregion
  //#region Methods
  executeGetMethod(url: string, request: any) {
    return this.http.get<any>(generalImports.environment.apiURL + url, request).pipe(generalImports.map((data: any) => { return data }));
  }
  executePostMethod(url: string, request: any) {
    return this.http.post<any>(generalImports.environment.apiURL + url, request).pipe(generalImports.map((data: any) => { return data }));
  }
  //#endregion
}