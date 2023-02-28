import { TreeModule } from 'primeng/tree';
import { GMapModule } from 'primeng/gmap';
import { MenuModule } from 'primeng/menu';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { MessageModule } from 'primeng/message';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TreeTableModule } from 'primeng/treetable';
import { FileUploadModule } from 'primeng/fileupload';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { HttpClientModule } from '@angular/common/http';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApplayoutComponent } from './applayout/applayout.component';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ApplayoutComponent
  ],
  imports: [
    TreeModule,
    MenuModule,
    GMapModule,
    ImageModule,
    ToastModule,
    TableModule,
    FormsModule,
    SliderModule,
    ButtonModule,
    DialogModule,
    CommonModule,
    RouterModule,
    TooltipModule,
    MessageModule,
    SidebarModule,
    MenubarModule,
    TabViewModule,
    MegaMenuModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    InputTextModule,
    InputMaskModule,
    SlideMenuModule,
    TreeTableModule,
    HttpClientModule,
    BreadcrumbModule,
    FileUploadModule,
    SplitButtonModule,
    InputNumberModule,
    ContextMenuModule,
    InputSwitchModule,
    ProgressBarModule,
    RadioButtonModule,
    MultiSelectModule,
    ConfirmPopupModule,
    OverlayPanelModule,
    AutoCompleteModule,
    ConfirmDialogModule,
    CascadeSelectModule,
    InputTextareaModule,
    ProgressSpinnerModule
  ],
  exports: [
    TreeModule,
    MenuModule,
    GMapModule,
    ToastModule,
    TableModule,
    FormsModule,
    ImageModule,
    SliderModule,
    ButtonModule,
    DialogModule,
    CommonModule,
    RouterModule,
    TooltipModule,
    MessageModule,
    SidebarModule,
    MenubarModule,
    TabViewModule,
    CalendarModule,
    CheckboxModule,
    MegaMenuModule,
    DropdownModule,
    TreeTableModule,
    InputTextModule,
    SlideMenuModule,
    FooterComponent,
    HeaderComponent,
    InputMaskModule,
    HttpClientModule,
    BreadcrumbModule,
    SidebarComponent,
    FileUploadModule,
    SplitButtonModule,
    InputNumberModule,
    ContextMenuModule,
    InputSwitchModule,
    ProgressBarModule,
    RadioButtonModule,
    MultiSelectModule,
    ConfirmPopupModule,
    OverlayPanelModule,
    AutoCompleteModule,
    ApplayoutComponent,
    ConfirmDialogModule,
    CascadeSelectModule,
    InputTextareaModule,
    ProgressSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }