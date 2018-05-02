import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

let root = "http://localhost:8080/api/category";
let headers = new HttpHeaders();
headers = headers.set('Content-Type','application/json').set('Access-Control-Allow-Origin','*')
.set('authorization', 'Bearer ' + "token");

@Injectable()
export class CategoriesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CategoriesProvider Provider');
  }

  getAll(){
    return this.http.post(root+'/getAll',{},{headers});
  }

}
