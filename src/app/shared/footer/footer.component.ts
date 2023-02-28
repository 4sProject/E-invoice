import { Component } from '@angular/core';
import * as generalComponentImports from '../../general/general-component-imports';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends generalComponentImports.Hellper {
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