import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public testTag: string = 'TEST M 33 xsE'

  constructor(public navCtrl: NavController) {

  }

}
