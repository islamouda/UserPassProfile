import { Component } from '@angular/core';


import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { AngularFireAuth }  from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private toast:ToastController, public afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad HomePage');

    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: 'Wellcom,'+data.email,
          duration:3500
        }).present();
    }else{
      this.toast.create({
        message: 'NO authentication',
        duration:3500
      }).present();
    }
    });


    
  }
}
