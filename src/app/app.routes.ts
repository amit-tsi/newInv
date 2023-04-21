/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent} from './dashboard/component/panels/panels.component';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { LockComponent } from './page/lock/lock.component';
import { RegisterComponent } from './page/register/register.component';
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

const routes: Routes = [
  {path: '', component: LoginComponent},
  // {path: 'lock', component: LockComponent},
  // {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: RootComponent, children: [
    {path:'user-management',component:UserManagementComponent},
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'table', component: TableComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'alert', component: SweetAlertComponent},
    {path: 'settings', component: SettingsComponent},
    {path:'masters/state-master',component:StateMasterComponent},
    {path:'masters/city-master', component:CityMasterComponent},
    {path:'masters/product-master', component:ProductMasterComponent},
    {path:'masters/category-master',component:CategoryMasterComponent},
    {path:'masters/sub-category',component:SubCategoryComponent},

    {path:'masters/brand',component:BrandComponent},
    {path:'masters/erp-bank-master',component:ErpBankMasterComponent},
    {path:'masters/measuring-unit',component:MeasuringUnitComponent},
    {path:'masters/po-master',component:PoMasterComponent},
    {path:'masters/vender',component:VenderComponent},
    {path:'masters/warehouse',component:WarehouseComponent},

    {path: 'components/price-table', component: PriceTableComponent},
    {path: 'components/panels', component: PanelsComponent},
    {path: 'components/wizard', component: WizardComponent}
  ]}
];

export const routing = RouterModule.forRoot(routes);

