import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;


  constructor(private fb:FormBuilder){
    this.loginform=this.fb.group({
      Firstname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength]],
      dropdown:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      State:['',Validators.required],
      postal:['',Validators.required]
    })
  }
  
  ngOnInit() {
  }

}
