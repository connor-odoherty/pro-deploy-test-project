import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public testTag: string = 'TEST M 2 E'

  constructor(public navCtrl: NavController) {

  }

}
