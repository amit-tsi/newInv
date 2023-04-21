import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
 import { States } from 'app/models/states';
 import { Cities } from 'app/models/cities';
 import {Vendors}  from 'app/models/vendors';
 import { ApiManagerService } from './api-manager.service';
import { ErpBankMasters } from 'app/models/erp-bank-masters'; 
import {MeasuringUnits} from 'app/models/measuring-units';
import { Pomasters } from 'app/models/pomasters';
import {Warehouses}  from 'app/models/warehouses';
import { Brands } from 'app/models/brands';
import { Products } from 'app/models/products';
import { CategoriesWithProduct } from 'app/models/categories';
import { SubcategoryWithCategory } from 'app/models/subcategories';
import {CitiesWithStates} from 'app/models/cities-with-states';

@Injectable({
  providedIn: 'root'
})
 
export class CommonservicesService {
  private readonly _baseUrl: string;
   
   constructor(private apiManager: ApiManagerService, private http: HttpClient) {
     this._baseUrl = environment.baseUrl ;
    }
  getStates() {
    return this.http.get<States[]>(this._baseUrl + 'Common/GetStates');
  }
  getAllCitiesWithStateId(stateId: number)
  {
    return this.http.get<CitiesWithStates[]>(this._baseUrl + 'Common/GetAllCitiesWithStateId?stateId'+ stateId);
  }
  getAllCitiesWithState()
  {
    return this.http.get<CitiesWithStates[]>(this._baseUrl + 'Common/GetAllCitieswithState');
  }
  getCities() {
    return this.http.get<States[]>(this._baseUrl + 'Common/GetCities');
  }
  getCityByStateId(stateId: number){
      return this.http.get<Cities[]>(this._baseUrl + 'Common/GetCitiesByStateId?stateId='+ stateId);
   }
   getActiveVendors(){
    return this.http.get<Vendors[]>(this._baseUrl + 'Common/getActiveVendors');
 }
   getActiveErpBankMaster()
   {
    return this.http.get<ErpBankMasters[]>(this._baseUrl + 'Common/getActiveErpbankmasters');
   }
 
getActiveMeasuringunits()
   {
    return this.http.get<MeasuringUnits[]>(this._baseUrl + 'Common/GetActiveMeasuringunits');
   }
 
getActivePomasters()
   {
    return this.http.get<[Pomasters]>(this._baseUrl + 'Common/GetActivePomasters');
   }
   getActiveBrands()
   {
    return this.http.get<Brands[]>(this._baseUrl + 'Common/GetActiveBrands');
    }
   getActiveWareHouses()
   {
    return this.http.get<Warehouses[]>(this._baseUrl + 'Common/GetActiveWareHouses');
    }
    getProducts()
    {
     return this.http.get<Products[]>(this._baseUrl + 'Product/GetProducts');
     }
     getAllCategoriesWithProducts()
    {
      return this.http.get<CategoriesWithProduct[]>(this._baseUrl + 'Product/GetAllCategoriesWithProducts');
    }
     getSubactegoriesWithCategories()
     {
      return this.http.get<SubcategoryWithCategory[]>(this._baseUrl + 'Product/GetAllSubcategoriesWithCategory');
     }
  }