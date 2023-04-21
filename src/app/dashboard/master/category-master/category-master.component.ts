import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesWithProduct }  from  'app/models/categories'
import { CommonservicesService } from 'app/services/commonservices.service';
import { MatDialog } from '@angular/material/dialog';
import { createViewChild } from '@angular/compiler/src/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { state } from '@angular/animations';
import { AddCategoryComponent } from 'app/dashboard/addForm/add-category/add-category.component';


@Component({
  selector: 'app-category-master',
  templateUrl: './category-master.component.html',
  styleUrls: ['./category-master.component.css']
})
export class CategoryMasterComponent implements OnInit, AfterViewInit {
  categories: CategoriesWithProduct[];
  displayedColumns: string[] = ["icon","productName","categoryName","description","isActive", "isDeleted","createdBy","createdOn","updatedBy","updatedOn"];
  dataSource = new MatTableDataSource<CategoriesWithProduct>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoaderResult = true;
  resultLength = 0

  constructor(private commonService: CommonservicesService,private matdialog:MatDialog) {
    this.commonService.getAllCategoriesWithProducts().subscribe(data => {
      this.categories = data;
      //console.log(this.categories);
      this.dataSource = new MatTableDataSource<CategoriesWithProduct>(this.categories);
      this.resultLength = this.categories.length;
      //console.log(this.dataSource);
    });
  }


  ngOnInit() {
  }
  openDialog(){
    this.matdialog.open(AddCategoryComponent);
  }
  ngAfterViewInit(): void {

  }
}
