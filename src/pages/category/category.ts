import {Component} from '@angular/core';
import {NavController, ActionSheetController, ModalController, NavParams} from 'ionic-angular';

import {ItemService} from '../../services/item-service';
import {CategoryService} from '../../services/category-service';
import {ModalFilterPage} from "../modal-filter/modal-filter";
import {ItemPage} from "../item/item";
import {CartPage} from "../cart/cart";
import { Category } from '../../models/Category';
import { ProductProvider } from '../../providers/product/product';
import { Product } from '../../models/Product';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  // list items of this category
  public items: any;

  // category info
  public category: Category;

  public products: Product[];

  // view type
  public viewType = 'list';

  // sort by
  public sortBy = 'Best Match';

  constructor(
      public nav: NavController,
      public itemService: ItemService,
      public categoryService: CategoryService,
      public modalCtrl: ModalController,
      public actionSheetCtrl: ActionSheetController,
      public navParams:NavParams,
      private productProvider:ProductProvider
    ) {
    // get list items of a category as sample
    this.items = itemService.getByCategory(1);

    this.category = this.navParams.get("id");
    console.log(this.category);
    this.productProvider.getCategoryProduct(this.category).subscribe((list:Product[])=>{
      console.log(list);  
      this.products = list;
      this.products.sort((a,b)=>a.productId-b.productId)    
    })

    // set category info
    //this.category = categoryService.getItem(1);
  }

  // switch to list view
  viewList() {
    this.viewType = 'list';
  }

  // swith to grid view
  viewGrid() {
    this.viewType = 'grid';
  }

  // get discount percent
  discountPercent(originPrice, salePrice) {
    return Math.round((salePrice - originPrice) * 100 / originPrice)
  }

  // choose sort by
  chooseSortBy() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Best Match',
          handler: () => {
            this.sortBy = 'Best Match';
          }
        },
        {
          text: 'Lowest Price First',
          handler: () => {
            this.sortBy = 'Lowest Price First';
          }
        },
        {
          text: 'Highest Price First',
          handler: () => {
            this.sortBy = 'Highest Price First';
          }
        },
        {
          text: 'No. of orders',
          handler: () => {
            this.sortBy = 'No. of orders';
          }
        },
        {
          text: 'Seller Rating',
          handler: () => {
            this.sortBy = 'Seller Rating';
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // show filter modal
  openFilter(tabName) {
    // show modal
    let modal = this.modalCtrl.create(ModalFilterPage, {tabName: tabName});

    // listen for modal close
    modal.onDidDismiss(confirm => {
      if (confirm) {
        // apply filter here
      } else {
        // do nothing
      }
    });

    modal.present();
  }

  // view a item
  viewItem(itemId) {
    this.nav.push(ItemPage, {id: itemId})
  }

  // view cart
  goToCart() {
    this.nav.setRoot(CartPage);
  }
}
