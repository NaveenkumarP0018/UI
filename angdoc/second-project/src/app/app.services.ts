import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn:'root'
})
export class AppServices{
    constructor(private x:HttpClient){
    }
    data(){
        return this.x.get("http://jsonplaceholder.typicode.com/users");
    }

}