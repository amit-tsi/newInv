import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendors } from 'app/models/vendors';
import { CommonservicesService } from 'app/services/commonservices.service';
import { MatDialog } from '@angular/material/dialog';
import { createViewChild } from '@angular/compiler/src/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table'  
import { AddProductsComponent } from '../../addForm/add-products/add-products.component';
 
@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit, AfterViewInit {
 vendors:Vendors[];
 dataSource = new MatTableDataSource<Vendors>([]);
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;
 isLoaderResult = true;
 resultLength = 0

  constructor(private commonService: CommonservicesService, private matdialog:MatDialog) {
    this.commonService.getActiveVendors().subscribe(data => {
      this.vendors = data;
      console.log(this.vendors);
     // this.dataSource = new MatTableDataSource<Vendors>(this.vendors);
      this.resultLength = this.vendors.length;
      console.log(this.dataSource);
    });
  }

  ngOnInit(): void {

  }
  openDialog(){
    this.matdialog.open(AddProductsComponent);
  }
  ngAfterViewInit(): void {

  }
  

}
