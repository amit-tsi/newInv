import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CitiesWithStates } from 'app/models/cities-with-states';
import { CommonservicesService } from 'app/services/commonservices.service';
import { MatDialog } from '@angular/material/dialog';
import { createViewChild } from '@angular/compiler/src/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { state } from '@angular/animations';
 
@Component({
  selector: 'app-city-master',
  templateUrl: './city-master.component.html',
  styleUrls: ['./city-master.component.css']
})

export class CityMasterComponent implements OnInit, AfterViewInit {
  cities: CitiesWithStates[];
  displayedColumns: string[] = ["icon", "stateName", "cityName", "pinCode", "description","isMetro","isActive","isDeleted","createdBy","createdOn","updatedBy","updatedOn"];
  dataSource = new MatTableDataSource<CitiesWithStates>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoaderResult = true;
  resultLength = 0

  constructor(private commonService: CommonservicesService) {
    this.commonService.getAllCitiesWithState().subscribe(data => {
      this.cities = data;
      console.log(this.cities);
      this.dataSource = new MatTableDataSource<CitiesWithStates>(this.cities);
      this.resultLength = this.cities.length;
      // console.log(this.dataSource);
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }



}