import { Component } from '@angular/core';
import { AppServices } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users:any=[];
  constructor(private nave:AppServices){
    //this.get(); it will call when the intance is created

  }
  get(){
    this.users=this.nave.data().subscribe(
      res=>{
        this.users=res;
      }
    )
  }
}
