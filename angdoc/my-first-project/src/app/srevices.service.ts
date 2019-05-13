import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SrevicesService {

  constructor(private http:HttpClient) { }
  data(){
    return this.http.get("http://jsonplaceholder.typicode.com/users")
  }
}
