import * as generalImports from '../general/general-component-imports';
export class Hellper extends generalImports.Localization {
    //#region  Declrations
    request: any = {};
    loginData!: generalImports.LoginModel;
    //#endregion
    //#region Constructor
    constructor() {
        super();
        this.loginData = {
            scope: '',
            client_id: '',
            expires_in: 0,
            language_id: 0,
            access_token: '',
            client_secret: '',
            remaining_time: 0,
            language_index: 1,
            html_float: 'right',
            last_login_time: '',
            refresh_page: false,
            token_type: 'Bearer',
            html_direction: 'rtl',
            language_shortCut: 'ar'
        };
    }
    //#endregion
    //#region Methods
    selectLanguage(event: any): void {
        this.loginData.refresh_page = false;
        if(event.target === undefined) this.loginData.refresh_page = true;
        this.loginData.language_shortCut = event.target === undefined ? event : event.target.value;
        switch(this.loginData.language_shortCut)
        {
            case 'ar':
                this.loginData.language_id = 1;
                this.loginData.language_index = 1;
                this.loginData.html_float = 'right';
                this.loginData.html_direction = 'rtl';
                document.getElementById('html')?.setAttribute('lang', 'ar');
                document.getElementById('html')?.setAttribute('dir', 'rtl');
                document.getElementById('style')?.setAttribute('href', 'assets/css/arabic-style.css');
                break;
            case 'en':
                this.loginData.language_id = 2;
                this.loginData.language_index = 0;
                this.loginData.html_float = 'left';
                this.loginData.html_direction = 'ltr';
                document.getElementById('html')?.setAttribute('lang', 'en');
                document.getElementById('html')?.setAttribute('dir', 'ltr');
                document.getElementById('style')?.setAttribute('href', 'assets/css/english-style.css');
                break;
        }
        sessionStorage.setItem('loginData', JSON.stringify(this.loginData));
        if(this.loginData.refresh_page) location.reload();
    }
    //#endregion
}