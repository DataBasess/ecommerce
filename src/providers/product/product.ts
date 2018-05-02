import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/Product';
import { Category } from '../../models/Category';


let root = "http://localhost:8080/api/product";
let headers = new HttpHeaders();
headers = headers.set('Content-Type','application/json').set('Access-Control-Allow-Origin','*')
.set('authorization', 'Bearer ' + "token");

@Injectable()
export class ProductProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
  }


  getAll(){
    return this.http.post(root+'/getAll',{headers});
  }

  get(product:Product){
    return this.http.post(root+'/get',JSON.stringify(product),{headers});
  }

  getCategoryProduct(category:Category){
    return this.http.post(root+'/getCategoryProduct',JSON.stringify(category),{headers});
  }

}
