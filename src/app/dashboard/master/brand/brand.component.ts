import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Brands } from 'app/models/brands';
import { CommonservicesService } from 'app/services/commonservices.service';
import { MatDialog } from '@angular/material/dialog';
import { createViewChild } from '@angular/compiler/src/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brands[];
  displayedColumns: string[] = ["icon", "brandName", "description", "isActive", "isDeleted"];
  dataSource = new MatTableDataSource<Brands>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoaderResult = true;
  resultLength = 0

  constructor(private commonService: CommonservicesService) {
    this.commonService.getActiveBrands().subscribe(data => {
      this.brands = data;
      console.log(this.brands);
      this.dataSource = new MatTableDataSource<Brands>(this.brands);
      this.resultLength = this.brands.length;
      // console.log(this.dataSource);
    });
  }
  
    ngOnInit(): void {

    }
  }


