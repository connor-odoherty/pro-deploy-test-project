import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public testTag: string = 'CHECK UPDATES 4'

  constructor(public navCtrl: NavController) {

  }

}
