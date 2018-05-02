import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {HomePage} from '../home/home';
import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { WelcomePage } from '../welcome/welcome';
import { TostProvider } from '../../providers/tost/tost';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user:User = {email:'anusondd@gmail.com',password:'21519097'};

  constructor(public nav: NavController,private Auth:AngularFireAuth,public tost:TostProvider) {
  }

  // go to register page
  register() {
    this.nav.push(RegisterPage);
  }

  // go to home page
  login(user:User) {
    this.Auth.auth.signInWithEmailAndPassword(user.email,user.password).then(res=>{
      this.nav.setRoot(HomePage);
      this.tost.presentLoading(3000);
    }).catch(e=>{
      this.nav.setRoot(WelcomePage);
    })
    
  }

  // go to forgot password page
  forgotPwd() {
    this.nav.push(ForgotPasswordPage);
  }
}
