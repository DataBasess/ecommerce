import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CategoryService} from '../../services/category-service';
import {CategoryPage} from '../category/category';
import {CartPage} from "../cart/cart";
import { CategoriesProvider } from '../../providers/categories/categories';
import { Category } from '../../models/Category';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  // list of categories
  public categories: Category[];

  constructor(
    public nav: NavController, 
    public categoryService: CategoryService,
    public categoriesProvider:CategoriesProvider) {
    //this.categories = categoryService.getAll();

    this.categoriesProvider.getAll().subscribe((data:Category[])=>{
      console.log(data);      
      this.categories = data;
      this.categories.sort((a,b)=> a.categoryId - b.categoryId );
    });
  }

  // view category
  viewCategory(category) {
    this.nav.push(CategoryPage, {id: category});
  }

  // view cart
  goToCart() {
    this.nav.setRoot(CartPage);
  }
}
