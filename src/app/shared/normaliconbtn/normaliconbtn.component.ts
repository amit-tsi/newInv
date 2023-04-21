import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-normaliconbtn',
  templateUrl: './normaliconbtn.component.html',
  styleUrls: ['./normaliconbtn.component.css']
})
export class NormaliconbtnComponent implements OnInit {
  @Input() number: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }

}
