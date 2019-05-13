import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';

ngOnInit(){
  this.gettasks();
}  

  gettasks(){
    debugger
    var lastEle=document.getElementById("last");
    var curHeight=lastEle.offsetHeight;
    var lastTask=document.getElementById("task");
    //lastTask.style.height=curHeight+"px";
      lastTask.style.maxHeight=curHeight+"px"
    lastTask.style.overflow='auto';
  }
  getName(){
    var los = document.getElementById('blur').style.display = 'block';
    var place = document.getElementById('user').removeAttribute('placeholder');
  }
  loseName(){
    var los = document.getElementById('blur').style.display = 'none';
    var place = document.getElementById('user').setAttribute('placeholder','UserName...');
  }
  getPassword(){

    // var emailValue = document.getElementById('username').value;
    // var user = document.getElementById('resetLink').value = emailValue;
  }
  
}
