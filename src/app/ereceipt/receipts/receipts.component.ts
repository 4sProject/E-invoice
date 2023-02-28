import { Component } from '@angular/core';
import * as generalComponentImports from '../../general/general-component-imports';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent extends generalComponentImports.Hellper {
  //#region Declrations
  receipts: any = [];
  paymentMethods: any = [
    {name: 'Cash', code: 'C'},
    {name: 'Visa', code: 'V'},
    {name: 'Cash with contractor', code: 'CC'},
    {name: 'Visa with contractor', code: 'VC'},
    {name: 'Vouchers', code: 'VO'},
    {name: 'Promotion', code: 'PR'},
    {name: 'Gift Card', code: 'GC'},
    {name: 'Points', code: 'P'},
    {name: 'Others', code: 'O	'}
  ];
  submissionChannels: any = [
    {name: 'POS', code: 'POS'},
    {name: 'ERP', code: 'ERP'},
    {name: 'Invoicing Portal', code: 'InvoicingPortal'},
    {name: 'Invoicing Mobile App', code: 'InvoicingMobileApp'}
  ];
  directions: any = [
    {name: 'Received', code: 'Received'},
    {name: 'Submitted', code: 'Submitted'}
  ]
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
        typeName: 'S', status: 'Valid', tokenData: this.loginData, pageNo: 1, pageSize: 500, uuid: '', issuerId: '',
        issuerName: '', receiverId: '', receiverName: '', submissionUUID: '', toDateTimeIssued: '', fromDateTimeIssued: '',
        toDateTimeReceived: '', documentTypeVersion: '', fromDateTimeReceived: '', sortBy: 'None', sortDir: 'None',
        direction: 'Received', paymentMethod: '', receiptNumber: '', submissionChannel: '', deviceSerialNumber: '', receiverRegisterationNumber: ''
      };
      this.getRecentReceipts(0);
    }
  }
  //#region Angular Life Cycle
  //#endregion
  //#region Methods
  getRecentReceipts(index: any): void {
    switch(index)
    {
      case 0: this.request.status = 'Valid'; break;
      case 1: this.request.status = 'Cancelled'; break;
    }
    if(index !== 2)
    {
      this.service.executePostMethod('EReceipt/GetRecentReceipts', this.request).subscribe(
        (response: any) => {
          if (response.result.errorNumber === 0) this.receipts = response.data.receipts;
          else this.toastr.error(response.result.errorMessage, this.localization[this.loginData.language_index].error);
      });
    }
    else
    {
      // this.service.executeGetMethod('Settings/LoadConfigurationFile', '').subscribe(
      //   (response: any) => {
      //     if (response.result.errorNumber === 0) 
      //     {
      //       this.eInvoicePayLoadRequest = JSON.parse(response.data.invoice.eInvoicePayLoad.request);
      //       this.eInvoicePayLoadResponse = JSON.parse(response.data.invoice.eInvoicePayLoad.responseMessage);
      //     }
      // });
    }
  }
  // getErrorMessages(internalId: string): string
  // {
  //   let errorMessage = '';
  //   var rejectedDocument = this.eInvoicePayLoadResponse.rejectedDocuments.filter((obj: any) => { return obj.internalId === internalId });
  //   errorMessage = this.prepaireErrorMessages(rejectedDocument[0].error, errorMessage);
  //   return errorMessage;
  // }
  // prepaireErrorMessages(errorObject: any, errorMessage: string): string
  // {
  //   if(errorObject.details !== undefined && errorObject.details != null && errorObject.details.length > 0) errorMessage = this.prepaireErrorMessages(errorObject.details, errorMessage);
  //   else { 
  //     errorObject.forEach((error: any) => {
  //       errorMessage += error.message + ' at Target ' + error.target + ' \n '; 
  //     });
  //   }
  //   return errorMessage;
  // }
  //#endregion
}