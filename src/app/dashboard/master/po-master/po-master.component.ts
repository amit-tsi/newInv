import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Pomasters } from 'app/models/pomasters';
import { CommonservicesService } from 'app/services/commonservices.service';
import { MatDialog } from '@angular/material/dialog';
import { createViewChild } from '@angular/compiler/src/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { state } from '@angular/animations';

@Component({
  selector: 'app-po-master',
  templateUrl: './po-master.component.html',
  styleUrls: ['./po-master.component.css']
})
 

  export class PoMasterComponent implements OnInit, AfterViewInit {
    pomasters: Pomasters[];
    displayedColumns: string[] = ["icon", "documentNumber", "poNumber", "description","item_GL_FA", "hsn_SacCode", "siteId","erpBankId","orderDate","venderCode","orderQuantity","receiveQuantity","measuringUnitId","unitPrice","address"];
    dataSource = new MatTableDataSource<Pomasters>([]);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    isLoaderResult = true;
    resultLength = 0
  
    constructor(private commonService: CommonservicesService) {
      this.commonService.getActivePomasters().subscribe(data => {
        this.pomasters = data;
        console.log(this.pomasters);
        this.dataSource = new MatTableDataSource<Pomasters>(this.pomasters);
        this.resultLength = this.pomasters.length;
        console.log(this.dataSource);
      });
    }
  
    ngOnInit(): void {
  
    }
  
    ngAfterViewInit(): void {
  
    }
  
  }
  
