import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppservicesService {

  constructor(private http:HttpClient) { }
  data(){
     return this.http.get("http://jsonplaceholder.typicode.com/users")
  }
  data1(){
    return this.http.get("http://jsonplaceholder.typicode.com/comments")
  }
}
