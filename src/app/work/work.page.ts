import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-work',
  templateUrl: 'work.page.html',
  styleUrls: ['work.page.scss'],
})
export class WorkPage implements OnInit {

  

  constructor(private animationCtrl: AnimationController, private translate: TranslateService) {

  }

  ngOnInit() {

   
  }

  open(url) {
    window.open(url, '_blank');
  }

}
