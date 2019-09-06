import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Na versão do Angular 8 é requerido que o
  // @ViewChild tenha um flag para especificar se
  // a query é estática ou dinâmica
  // https://angular.io/guide/static-query-migration
  // https://github.com/angular/angular-cli/issues/14553
  @ViewChild(IonSlides, {static:true}) slides: IonSlides;
  public wavesPosition: number = 0;
  public wavesDifference: number = 80;

  constructor(public keyboard: Keyboard) { }

  ngOnInit() {
    
  }

  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }
}
