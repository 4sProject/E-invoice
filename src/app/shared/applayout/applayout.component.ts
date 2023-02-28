import { Component } from '@angular/core';
import * as generalComponentImports from '../../general/general-component-imports';

@Component({
  selector: 'app-applayout',
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.css']
})
export class ApplayoutComponent extends generalComponentImports.Hellper {
  //#region Declrations
  //#endregion
  //#region Constructor
  constructor(private router: generalComponentImports.Router) { 
    super();
    this.loginData = JSON.parse(sessionStorage['loginData']);
    if(this.loginData.access_token === '') this.router.navigate(['user/login']);
  }
  //#endregion
  //#region Angular Life Cycle
  //#endregion
  //#region Methods
  //#endregion
}