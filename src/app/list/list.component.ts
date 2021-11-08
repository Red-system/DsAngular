import { Component, OnInit } from '@angular/core';
import { ListUpdateService } from '../list-update.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listService: any;


  constructor() { }

  ngOnInit(): void {
    this.listService.getCookies();
  }

}
