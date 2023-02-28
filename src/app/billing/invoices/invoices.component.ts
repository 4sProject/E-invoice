import { Component } from '@angular/core';
import * as generalComponentImports from '../../general/general-component-imports';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent extends generalComponentImports.Hellper {
  //#region Declrations
  documents: any = [];
  configurationDocument: any;
  eInvoicePayLoadRequest: any = {};
  eInvoicePayLoadResponse: any = {};
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
    else {
      this.request = { 
        typeName: 'I', status: 'Valid', tokenData: this.loginData, pageNo: 1, pageSize: 500, uuid: '', issuerId: '',
        issuerName: '', receiverId: '', receiverName: '', submissionUUID: '', toDateTimeIssued: '', fromDateTimeIssued: '',
        toDateTimeReceived: '', documentTypeVersion: '', fromDateTimeReceived: ''
      };
      this.getRecentDocuments(0);
    }
  }
  //#endregion
  //#region Angular Life Cycle
  //#endregion
  //#region Methods
  getRecentDocuments(index: any): void {
    switch(index)
    {
      case 0: this.request.status = 'Valid'; break;
      case 1: this.request.status = 'Invalid'; break;
      case 2: this.request.status = 'Submitted'; break;
      case 3: this.request.status = 'Rejected'; break;
      case 4: this.request.status = 'Cancelled'; break;
    }
    if(index !== 5)
    {
      this.service.executePostMethod('EInvoice/GetRecentDocuments', this.request).subscribe(
        (response: any) => {
          if (response.result.errorNumber === 0) this.documents = response.data.result;
      });
    }
    else
    {
      this.service.executeGetMethod('Settings/LoadConfigurationFile', '').subscribe(
        (response: any) => {
          if (response.result.errorNumber === 0) 
          {
            this.eInvoicePayLoadRequest = JSON.parse(response.data.invoice.eInvoicePayLoad.request);
            this.eInvoicePayLoadResponse = JSON.parse(response.data.invoice.eInvoicePayLoad.responseMessage);
          }
      });
    }
  }
  getErrorMessages(internalId: string): string
  {
    let errorMessage = '';
    var rejectedDocument = this.eInvoicePayLoadResponse.rejectedDocuments.filter((obj: any) => { return obj.internalId === internalId });
    errorMessage = this.prepaireErrorMessages(rejectedDocument[0].error, errorMessage);
    return errorMessage;
  }
  prepaireErrorMessages(errorObject: any, errorMessage: string): string
  {
    if(errorObject.details !== undefined && errorObject.details != null && errorObject.details.length > 0) errorMessage = this.prepaireErrorMessages(errorObject.details, errorMessage);
    else { 
      errorObject.forEach((error: any) => {
        errorMessage += error.message + ' at Target ' + error.target + ' \n '; 
      });
    }
    return errorMessage;
  }
  //#endregion
}