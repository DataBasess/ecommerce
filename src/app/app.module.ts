import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

// import services
import {CategoryService} from '../services/category-service';
import {ItemService} from '../services/item-service';
import {UserService} from '../services/user-service';
import {StoreService} from '../services/store-service';
import {CartService} from '../services/cart-service';
import {OrderService} from '../services/order-service';
import {NewsService} from '../services/news-service';
// end import services
// end import services

// import pages
import {CartPage} from '../pages/cart/cart';
import {CategoriesPage} from '../pages/categories/categories';
import {CategoryPage} from '../pages/category/category';
import {ChangePasswordPage} from '../pages/change-password/change-password';
import {CurrencyConverterPage} from '../pages/currency-converter/currency-converter';
import {ForgotPasswordPage} from '../pages/forgot-password/forgot-password';
import {HomePage} from '../pages/home/home';
import {ItemPage} from '../pages/item/item';
import {LoginPage} from '../pages/login/login';
import {ModalFilterPage} from '../pages/modal-filter/modal-filter';
import {ModalItemOptionPage} from '../pages/modal-item-option/modal-item-option';
import {MyAccountPage} from '../pages/my-account/my-account';
import {MyOrderPage} from '../pages/my-order/my-order';
import {OrderConfirmPage} from '../pages/order-confirm/order-confirm';
import {RegisterPage} from '../pages/register/register';
import {SearchPage} from '../pages/search/search';
import {SettingsPage} from '../pages/settings/settings';
import {StorePage} from '../pages/store/store';
import {TabAttributePage} from '../pages/tab-attribute/tab-attribute';
import {TabFilterPage} from '../pages/tab-filter/tab-filter';
import {WelcomePage} from '../pages/welcome/welcome';
import {WishListPage} from '../pages/wish-list/wish-list';
// end import pages

import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { TostProvider } from '../providers/tost/tost';
import { HttpClientModule } from '@angular/common/http';
import { ProductProvider } from '../providers/product/product';
import { CategoriesProvider } from '../providers/categories/categories';

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    CategoriesPage,
    CategoryPage,
    ChangePasswordPage,
    CurrencyConverterPage,
    ForgotPasswordPage,
    HomePage,
    ItemPage,
    LoginPage,
    ModalFilterPage,
    ModalItemOptionPage,
    MyAccountPage,
    MyOrderPage,
    OrderConfirmPage,
    RegisterPage,
    SearchPage,
    SettingsPage,
    StorePage,
    TabAttributePage,
    TabFilterPage,
    WelcomePage,
    WishListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBM0RzKCpN-wuGueTi5KjSaSFQgR3p1Kug",
      authDomain: "blockchain-a.firebaseapp.com",
      databaseURL: "https://blockchain-a.firebaseio.com",
      projectId: "blockchain-a",
      storageBucket: "blockchain-a.appspot.com",
      messagingSenderId: "209725170616"
  }),
  AngularFireAuthModule, 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    CategoriesPage,
    CategoryPage,
    ChangePasswordPage,
    CurrencyConverterPage,
    ForgotPasswordPage,
    HomePage,
    ItemPage,
    LoginPage,
    ModalFilterPage,
    ModalItemOptionPage,
    MyAccountPage,
    MyOrderPage,
    OrderConfirmPage,
    RegisterPage,
    SearchPage,
    SettingsPage,
    StorePage,
    TabAttributePage,
    TabFilterPage,
    WelcomePage,
    WishListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoryService,
    ItemService,
    UserService,
    StoreService,
    CartService,
    OrderService,
    NewsService,
    TostProvider,
    ProductProvider,
    CategoriesProvider
    /* import services */
  ]
})
export class AppModule {
}
