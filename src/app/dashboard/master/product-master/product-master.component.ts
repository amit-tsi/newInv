import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'app/models/products';
import { CommonservicesService } from 'app/services/commonservices.service';
import { MatDialog } from '@angular/material/dialog';
import { createViewChild } from '@angular/compiler/src/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { state } from '@angular/animations';
import { AddProductsComponent } from 'app/dashboard/addForm/add-products/add-products.component';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent implements OnInit, AfterViewInit {
  products: Products[];
  displayedColumns: string[] = ["icon", "productName", "description", "isActive","isDeleted"];
  dataSource = new MatTableDataSource<Products>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoaderResult = true;
  resultLength = 0

  constructor(private commonService: CommonservicesService,private matdialog:MatDialog) {
    this.commonService.getProducts().subscribe(data => {
      this.products = data;
     // console.log(this.products);
      this.dataSource = new MatTableDataSource<Products>(this.products);
      this.resultLength = this.products.length;
      // console.log(this.dataSource);
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }
  openDialog(){
    this.matdialog.open(AddProductsComponent);
  }
}
