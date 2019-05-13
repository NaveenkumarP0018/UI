import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'third-project';
  user:any=[];
  comm:any=[];
  constructor(private info:ServiceService){
  }
  getuser(){
    this.user=this.info.data().subscribe(
      res=>{
        this.user=res;

      }
    )
  }
  commentuser(){
    this.comm=this.info.comment().subscribe(
      nav=>{
        this.comm=nav;
      }
    )
  }
  getcolor(id){
    if(id%2==0) return "green"
    else return "red"

  }
  setcolor(nav){
    if(nav%2==0) return "green"
    else return "pink"
  }
}
