import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _backEndService : BackEndService) { }

  ngOnInit(): void {
    this.onFetch();
  }
  
  onSave(){
    console.log("onSave() is called")
    this._backEndService.saveData();
  }

  onFetch(){
    console.log("onFetch() is called")
    this._backEndService.fetchData();
  }
}
