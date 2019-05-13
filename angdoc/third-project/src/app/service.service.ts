import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  data(){
    return this.http.get("http://jsonplaceholder.typicode.com/users")
  }
  comment(){
    return this.http.get("http://jsonplaceholder.typicode.com/comments")
  }
}
