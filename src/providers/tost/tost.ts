import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';

/*
  Generated class for the TostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TostProvider {

  constructor(
    public http: HttpClient,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {
    console.log('Hello TostProvider Provider');
  }

  tost(messages){
    let toast = this.toastCtrl.create({
      message: messages,
      duration: 4000
    });
    toast.present();
  }

  presentLoading(time:number) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: time
    });
    loader.present();
  }

}
