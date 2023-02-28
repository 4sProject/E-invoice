import { Component } from '@angular/core';
import * as generalComponentImports from '../../general/general-component-imports';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent extends generalComponentImports.Hellper {
  //#region Declrations

  //#endregion
  //#region Constructor
  constructor(
    private service: generalComponentImports.GeneralService,
    private router: generalComponentImports.Router,
    private toastr: generalComponentImports.ToastrService
  ) {
    super();
    this.request = {};
    this.loginData.client_id = 'eb010def-fa16-4feb-b1a2-138a5128830e';
    this.loginData.client_secret = '34cb03dd-9cd9-453c-b763-a86a269eb47d';
    sessionStorage['loginData'] = this.loginData;
    // this.loginData = JSON.parse(sessionStorage['loginData']);
  }
  //#endregion
  //#region Angular Life Cycle
  //#endregion
  //#region Methods
  signInUser(): void {

    if (this.loginData.client_id !== '') {
      if (this.loginData.client_secret !== '') {
        
        this.service.executePostMethod('STORE_TRNS_M/GetAllDependancyRemaningQuantityTransactions', this.loginData).subscribe(
          (response: any) => {
            console.log(response);
            debugger
        });
        
        // this.service.executePostMethod('User/LogIn', this.loginData).subscribe(
        //   (response: any) => {
        //     if (response.result.errorNumber === 0) {
        //       this.loginData.scope = response.data.scope;
        //       this.loginData.expires_in = response.data.expires_in;
        //       this.loginData.token_type = response.data.token_type;
        //       this.loginData.access_token = response.data.access_token;
        //       sessionStorage.setItem('loginData', JSON.stringify(this.loginData));
        //       this.router.navigate(['/settings']);
        //     }
        //     else this.toastr.error(this.localization[this.loginData.language_index].invalidClient, this.localization[this.loginData.language_index].error);
        // });

      }
      else this.toastr.error(this.localization[this.loginData.language_index].clientSecretReequired, this.localization[this.loginData.language_index].error);
    }
    else this.toastr.error(this.localization[this.loginData.language_index].clientIdReequired, this.localization[this.loginData.language_index].error);
  }
  //#endregion
}