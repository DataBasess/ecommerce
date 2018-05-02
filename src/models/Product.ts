import { Category } from "./Category";

export interface Product {
    productId?:number
    categoryId:Category
    productName:string
    productPrice:number
    productDetail:string
    productImages:string
    productSort:number
    productStatus:Boolean
}