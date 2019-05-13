import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent{
  nave:any=[];

  constructor(private h:ServiceService) {
    this.get();
  }
  get(){
    alert("fkjwjfw")
  }

}
