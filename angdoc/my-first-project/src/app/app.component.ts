import { Component } from '@angular/core';
import { SrevicesService } from './srevices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  abc:string="Naveenkumar";
  xyz:string="NTR";
  aaa:number=10;
  bbb:number=11;
  changeMe(event){
    
    var x=event.target.value;
    this.abc=x;

  }
   student=[
    {
      id:1,
      name:"naveen",
      marks:100
    },
    {
      id:2,
      name:"giri",
      marks:100
    },
    {
      id:3,
      name:"linga",
      marks:100
    },
    {
      id:4,
      name:"mani",
      marks:100
    },

  ]
  doubleHeight(event){
    let current = event.target;
    if(!current) return;
    let rowHeight = current.offsetHeight;
    let newHeight = 2 * rowHeight;
    //current.style.height = newHeight + "px";
   let sib = current.nextSibling;
   sib.style.height = rowHeight + "px";
   sib.style.background = "green";
  }
  user:any=[];
  constructor(private navee:SrevicesService){}
  get(){
    this.user=this.navee.data().subscribe(
      res =>{
        this.user=res;
      }
    )
  }
  
}