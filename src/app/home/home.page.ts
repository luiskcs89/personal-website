import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  typeString = [`Hi,  I  am  LuisK,  mobile  and  web  app  architect  and  plant  based  marathoner.<br>
  Welcome  to  my  website!<br>
  Scroll right to run or click a button and Dino will make a sprint to reach the desired section.<br>
  He is pretty fast!`];
  allowScroll = false;

  homeButtonAnimToTop: Animation;
  homeButtonOnTop = false;

  codeButtonAnimToTop: Animation;
  codeButtonOnTop = false;

  runButtonAnimToTop: Animation;
  runButtonOnTop = false;

  plantButtonAnimToTop: Animation;
  plantButtonOnTop = false;

  constructor(private animationCtrl: AnimationController) {
  }

  ngOnInit() {
    this.creatAnimations();
    document.getElementById('container').addEventListener('scroll', (event) => {
      console.log((event.target as HTMLElement).scrollLeft);

      const currentScroll = (event.target as HTMLElement).scrollLeft;
      if (currentScroll === 0) {
        if (this.homeButtonOnTop) {
          this.homeButtonOnTop = false;
          this.homeButtonAnimToTop.direction('reverse').play();
        }

        if (this.codeButtonOnTop) {
          this.codeButtonOnTop = false;
          this.codeButtonAnimToTop.direction('reverse').play();
        }

        if (this.runButtonOnTop) {
          this.runButtonOnTop = false;
          this.runButtonAnimToTop.direction('reverse').play();
        }

        if (this.plantButtonOnTop) {
          this.plantButtonOnTop = false;
          this.plantButtonAnimToTop.direction('reverse').play();
        }
      }

      if (currentScroll > 0) {
        if (!this.homeButtonOnTop) {
          this.homeButtonOnTop = true;
          this.homeButtonAnimToTop.direction('normal').play();
        }

        if (!this.codeButtonOnTop) {
          this.codeButtonOnTop = true;
          this.codeButtonAnimToTop.direction('normal').play();
        }

        if (!this.runButtonOnTop) {
          this.runButtonOnTop = true;
          this.runButtonAnimToTop.direction('normal').play();
        }

        if (!this.plantButtonOnTop) {
          this.plantButtonOnTop = true;
          this.plantButtonAnimToTop.direction('normal').play();
        }
      }

    });
  }

  creatAnimations() {
    this.homeButtonAnimToTop = this.animationCtrl.create()
    .addElement(document.querySelector('.blue'))
    .duration(1000)
    .fromTo('left', '50%', '10px')
    .fromTo('top', '50%', '10px')
    .fromTo('transform', 'translate(calc(-50% - 111px), 50%)', 'translate(0)');

    this.codeButtonAnimToTop = this.animationCtrl.create()
    .addElement(document.querySelector('.green'))
    .duration(1000)
    .fromTo('left', '50%', '84px')
    .fromTo('top', '50%', '10px')
    .fromTo('transform', 'translate(calc(-50% - 37px), 50%)', 'translate(0)');

    this.runButtonAnimToTop = this.animationCtrl.create()
    .addElement(document.querySelector('.red'))
    .duration(1000)
    .fromTo('left', '50%', '158px')
    .fromTo('top', '50%', '10px')
    .fromTo('transform', 'translate(calc(-50% + 37px), 50%)', 'translate(0)');

    this.plantButtonAnimToTop = this.animationCtrl.create()
    .addElement(document.querySelector('.yellow'))
    .duration(1000)
    .fromTo('left', '50%', '232px')
    .fromTo('top', '50%', '10px')
    .fromTo('transform', 'translate(calc(-50% + 111px), 50%)', 'translate(0)');
  }

  setAllowScroll(allow) {
    this.allowScroll = allow;
  }
}
