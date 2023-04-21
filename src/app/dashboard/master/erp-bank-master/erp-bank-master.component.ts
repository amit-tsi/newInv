import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ErpBankMasters }  from  'app/models/erp-bank-masters'
import { CommonservicesService } from 'app/services/commonservices.service';
import { MatDialog } from '@angular/material/dialog';
import { createViewChild } from '@angular/compiler/src/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { state } from '@angular/animations';

@Component({
  selector: 'app-erp-bank-master',
  templateUrl: './erp-bank-master.component.html',
  styleUrls: ['./erp-bank-master.component.css']
})
export class ErpBankMasterComponent implements OnInit, AfterViewInit {
  erpBanks: ErpBankMasters[];
  displayedColumns: string[] = ["icon", "erpBankCode", "description","isActive", "isDeleted"];
  dataSource = new MatTableDataSource<ErpBankMasters>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoaderResult = true;
  resultLength = 0

  constructor(private commonService: CommonservicesService) {
    this.commonService.getActiveErpBankMaster().subscribe(data => {
      this.erpBanks = data;
      //console.log(this.erpBanks);
      this.dataSource = new MatTableDataSource<ErpBankMasters>(this.erpBanks);
      this.resultLength = this.erpBanks.length;
      //console.log(this.dataSource);
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }
  
}