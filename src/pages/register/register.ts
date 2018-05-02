import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { TostProvider } from '../../providers/tost/tost';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  user:User = {email:'anusondd@gmail.com',password:'21519097'};

  constructor(public nav: NavController,private Auth:AngularFireAuth,public tost:TostProvider) {
  }

  // go to login page
  login() {
    this.nav.push(LoginPage);
  }

  // go to home page
  register(user:User) {
    this.Auth.auth.createUserWithEmailAndPassword(user.email,user.password).then(res=>{
      this.nav.setRoot(LoginPage);
      this.tost.tost('Success :'+res);
    }).catch(e=>{
      this.tost.tost('Error :'+e);
    })
  }
}
