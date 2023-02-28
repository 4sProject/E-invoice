import { Component } from '@angular/core';
import * as generalComponentImports from '../../general/general-component-imports';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent extends generalComponentImports.Hellper {
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