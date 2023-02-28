import { Component } from '@angular/core';
import * as generalComponentImports from '../../general/general-component-imports';

@Component({
  selector: 'app-prepaire-system',
  templateUrl: './prepaire-system.component.html',
  styleUrls: ['./prepaire-system.component.css']
})
export class PrepaireSystemComponent extends generalComponentImports.Hellper {
  //#region Declrations
  configurationDocument: any;
  connectionMessage: string = '';
  isSuccessConnection: boolean = false;
  fieldDatabaseObjectName: string = '';
  //#endregion
  //#region Constructor
  constructor(
    private service: generalComponentImports.GeneralService,
    private router: generalComponentImports.Router,
    private toastr: generalComponentImports.ToastrService
  ) {
    super();
    this.loginData = JSON.parse(sessionStorage['loginData']);
    if (this.loginData.access_token === '') this.router.navigate(['user/login']);
    else this.request = { user_schema: 'Demo', password: 'demo', protocol: 'TCP', host: 'localhost', port: 1521, server: 'dedicated', service_name: 'orcl.docker.internal' };
  }
  //#endregion
  //#region Angular Life Cycle
  //#endregion
  //#region Methods
  connectDatabase(): void {
    if (this.request.user_schema !== '') {
      if (this.request.password !== '') {
        if (this.request.protocol !== '') {
          if (this.request.host !== '') {
            if (this.request.port > 0) {
              if (this.request.server !== '') {
                if (this.request.service_name !== '') {
                  this.service.executePostMethod('Settings/ConnectDatabase', this.request).subscribe(
                    (response: any) => {
                      if (response.errorNumber === 0) {
                        this.isSuccessConnection = true;
                        this.connectionMessage = this.localization[this.loginData.language_index].success + this.localization[this.loginData.language_index].successConnectDatabase;
                        this.toastr.success(this.localization[this.loginData.language_index].successConnectDatabase, this.localization[this.loginData.language_index].success);

                        this.service.executeGetMethod('Settings/LoadConfigurationFile', '').subscribe(
                          (response: any) => {
                            if (response.result.errorNumber === 0) this.configurationDocument = response.data;
                        });

                      }
                      else {
                        this.isSuccessConnection = false;
                        this.connectionMessage = this.localization[this.loginData.language_index].error + this.localization[this.loginData.language_index].failConnectDatabase;
                        this.toastr.error(this.localization[this.loginData.language_index].failConnectDatabase, this.localization[this.loginData.language_index].error);
                      }
                    });
                }
                else this.toastr.error(this.localization[this.loginData.language_index].serviceNameReequired, this.localization[this.loginData.language_index].error);
              }
              else this.toastr.error(this.localization[this.loginData.language_index].serverReequired, this.localization[this.loginData.language_index].error);
            }
            else this.toastr.error(this.localization[this.loginData.language_index].portReequired, this.localization[this.loginData.language_index].error);
          }
          else this.toastr.error(this.localization[this.loginData.language_index].hostReequired, this.localization[this.loginData.language_index].error);
        }
        else this.toastr.error(this.localization[this.loginData.language_index].protocolReequired, this.localization[this.loginData.language_index].error);
      }
      else this.toastr.error(this.localization[this.loginData.language_index].passwordReequired, this.localization[this.loginData.language_index].error);
    }
    else this.toastr.error(this.localization[this.loginData.language_index].userSchemaReequired, this.localization[this.loginData.language_index].error);
  }

  validateDatabaseObject(event: any, rowIndex: number, field: any) {
    this.service.executePostMethod('Settings/ValidateDatabaseObject', field).subscribe(
      (response: any) => {
        if (response.errorNumber === 0) {
          this.service.executePostMethod('Settings/UploadConfigurationFile', this.configurationDocument).subscribe(
            (response: any) => {
              if (response.errorNumber > 0) this.toastr.error(response.errorMessage, this.localization[this.loginData.language_index].error);
          });
        }
        else this.toastr.error(response.errorMessage, this.localization[this.loginData.language_index].error);
    });
    // if (field.databaseObjectName !== '') {
    //   if (field.databaseColumnName !== ''){
    //   }
    //   else this.toastr.error(this.localization[this.loginData.language_index].fieldDatabaseColumnName + ' ' + field.name + this.localization[this.loginData.language_index].isRequired, this.localization[this.loginData.language_index].error);
    // }
    // else this.toastr.error(this.localization[this.loginData.language_index].fieldDatabaseObjectName + ' ' + field.name + this.localization[this.loginData.language_index].isRequired, this.localization[this.loginData.language_index].error);
  }
  //#endregion
}