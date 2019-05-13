import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppservicesService } from './appservices.service';
import { getDefaultService } from 'selenium-webdriver/opera';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  user:any=[];
  comm:any=[];
  constructor(private app:AppservicesService){
    this.getuser();
    this.commentuser();
  }
  getuser(){
    this.user=this.app.data().subscribe(
      res=>{
        this.user=res
      }
    )

      }
      getcolor(id){
        if(id%2==0) return "pink"
        else return "green"
      }
      commentuser(){
        this.comm=this.app.data1().subscribe(
          res=>{
            this.comm=res
          }
        )
      }
      commentid(id){
        if(id%2==0) return "green"
      }
}
