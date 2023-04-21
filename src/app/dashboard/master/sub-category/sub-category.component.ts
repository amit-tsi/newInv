import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
import { SubcategoryWithCategory }  from  'app/models/subcategories'
import { CommonservicesService } from 'app/services/commonservices.service';
import { MatDialog } from '@angular/material/dialog';
import { createViewChild } from '@angular/compiler/src/core';
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit, AfterViewInit {
  subcategoryWithCategory: SubcategoryWithCategory[];
  displayedColumns: string[] = ["icon","categoryName","subCategoryName","description","isActive", "isDeleted","createdBy","createdOn","updatedBy","updatedOn"];
  dataSource = new MatTableDataSource<SubcategoryWithCategory>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoaderResult = true;
  resultLength = 0

  constructor(private commonService: CommonservicesService) {
    this.displayedColumns = this.displayedColumns;
    this.commonService.getSubactegoriesWithCategories().subscribe(data => {
      console.log( data);
      this.subcategoryWithCategory = data;
      console.log(this.subcategoryWithCategory);
      this.dataSource = new MatTableDataSource<SubcategoryWithCategory>(this.subcategoryWithCategory);
      this.resultLength = this.subcategoryWithCategory.length;
      console.log(this.dataSource);
    });
  }
   

  ngOnInit() {
  }
  ngAfterViewInit(): void {

  }

}
