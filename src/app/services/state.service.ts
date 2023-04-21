import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
 import { States } from 'app/models/states';
 import { Cities } from 'app/models/cities';
 import { ApiManagerService } from './api-manager.service';


@Injectable({
  providedIn: 'root'
})
export class StateService {
 private readonly _baseUrl: string;
  constructor(private apiManager: ApiManagerService, private http: HttpClient) {
    this._baseUrl = environment.baseUrl ;
   }

   getStates() {
    return this.http.get<States[]>(this._baseUrl + 'Common/GetStates');
  }
  getCities() {
    return this.http.get<States[]>(this._baseUrl + 'Common/GetCities');
  }
    getCityByStateId(stateId: number){
      return this.http.get<Cities[]>(this._baseUrl + 'Common/GetCitiesByStateId?stateId='+ stateId);
    }
}
