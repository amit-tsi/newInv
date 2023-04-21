import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouses } from 'app/models/warehouses'
import { CommonservicesService } from 'app/services/commonservices.service';
import { MatDialog } from '@angular/material/dialog';
import { createViewChild } from '@angular/compiler/src/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { state } from '@angular/animations';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit, AfterViewInit {
  Warehouses: Warehouses[];
  displayedColumns: string[] = ["icon", "warehouseName", "description", "cityId", "warehouseManagerId"];
  dataSource = new MatTableDataSource<Warehouses>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoaderResult = true;
  resultLength = 0

  constructor(private commonService: CommonservicesService) {
    this.commonService.getActiveWareHouses().subscribe(data => {
      this.Warehouses = data;
      console.log(this.Warehouses);
       this.dataSource = new MatTableDataSource<Warehouses>(this.Warehouses);
      this.resultLength = this.Warehouses.length;
      console.log(this.dataSource);
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

}
