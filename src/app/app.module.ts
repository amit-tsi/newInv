import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule, MatDialog, MatDialogModule, MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule,  MatTableDataSource , MatProgressSpinnerModule, MatListModule} from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { NormaliconbtnComponent } from './shared/normaliconbtn/normaliconbtn.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { LoginComponent } from './page/login/login.component';
import { RootComponent } from './dashboard/root/root.component';
import { RegisterComponent } from './page/register/register.component';
import { LockComponent } from './page/lock/lock.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent } from './dashboard/component/panels/panels.component';
import { SettingsService } from './services/settings.service';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';
import {MatCardModule} from '@angular/material/card';
import { StateMasterComponent } from './dashboard/master/state-master/state-master.component';
import { CityMasterComponent } from './dashboard/master/city-master/city-master.component';
import { ProductMasterComponent } from './dashboard/master/product-master/product-master.component';
import { CategoryMasterComponent } from './dashboard/master/category-master/category-master.component';
import { SubCategoryComponent } from './dashboard/master/sub-category/sub-category.component';
import { BrandComponent } from './dashboard/master/brand/brand.component';
import { ErpBankMasterComponent } from './dashboard/master/erp-bank-master/erp-bank-master.component';
import { MeasuringUnitComponent } from './dashboard/master/measuring-units/measuring-unit.component';
import { PoMasterComponent } from './dashboard/master/po-master/po-master.component';
import { VenderComponent } from './dashboard/master/vender/vender.component';
import { WarehouseComponent } from './dashboard/master/warehouse/warehouse.component';
import { UserManagementComponent } from './dashboard/user-management/user-management.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './dashboard/addForm/add-products/add-products.component';
import { AddCategoryComponent } from './dashboard/addForm/add-category/add-category.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    LockComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    PriceTableComponent,
    PanelsComponent,
    WizardComponent,
    StateMasterComponent,
    CityMasterComponent,
    ProductMasterComponent,
    CategoryMasterComponent,
    SubCategoryComponent,
    BrandComponent,
    ErpBankMasterComponent,
    MeasuringUnitComponent,
    PoMasterComponent,
    VenderComponent,
    WarehouseComponent,
    NormaliconbtnComponent,
    UserManagementComponent,
    AddProductsComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatListModule,
    
  ],
  entryComponents:[
    AddProductsComponent,
    AddCategoryComponent
  ],
  exports:[

  ],

  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {


  
 }
