import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { States } from 'app/models/states';
import { CommonservicesService } from 'app/services/commonservices.service';
import { MatDialog } from '@angular/material/dialog';
import { createViewChild } from '@angular/compiler/src/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { state } from '@angular/animations';


@Component({
  selector: 'app-state-master',
  templateUrl: './state-master.component.html',
  styleUrls: ['./state-master.component.css']
})
export class StateMasterComponent implements OnInit, AfterViewInit {
  states: States[];
  displayedColumns: string[] = ["icon", "stateName", "stateCode", "gstStateCode"];
  dataSource = new MatTableDataSource<States>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoaderResult = true;
  resultLength = 0

  constructor(private commonService: CommonservicesService) {
    this.commonService.getStates().subscribe(state => {
      this.states = state;
      console.log(this.states);
      this.dataSource = new MatTableDataSource<States>(this.states);
      this.resultLength = this.states.length;
      // console.log(this.dataSource);
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }



}
