import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  typeStringIntro = null;

  typeStringCoding = null;

  typeStringRunning = null;

  typeStringCooking = null;

  typeStringCredits = null;

  allowScroll = true;

  contactAnim: Animation;

  homeButtonAnimToTop: Animation;
  homeButtonOnTop = false;

  codeButtonAnimToTop: Animation;
  codeButtonOnTop = false;

  runButtonAnimToTop: Animation;
  runButtonOnTop = false;

  plantButtonAnimToTop: Animation;
  plantButtonOnTop = false;

  introAnimFadeOut: Animation;
  introFadedOut = false;

  showCoding = false;
  codingAnimFadeOut: Animation;
  codingFadedOut = false;

  showRunning = false;
  runningAnimFadeOut: Animation;
  runningFadedOut = false;

  showCooking = false;
  cookingAnimFadeOut: Animation;
  cookingFadedOut = false;

  showCredits = false;
  creditsAnimFadeOut: Animation;
  creditsFadedOut = false;

  constructor(private animationCtrl: AnimationController, private translate: TranslateService) {

    translate.get('PAGES.HOME.INTRO').subscribe((res: string) => {
      this.typeStringIntro = [res];
    });

    translate.get('PAGES.HOME.CODING').subscribe((res: string) => {
      this.typeStringCoding = [res];
    });

    translate.get('PAGES.HOME.RUNNING').subscribe((res: string) => {
      this.typeStringRunning = [res];
    });

    translate.get('PAGES.HOME.COOKING').subscribe((res: string) => {
      this.typeStringCooking = [res];
    });

    translate.get('PAGES.HOME.CREDITS').subscribe((res: string) => {
      this.typeStringCredits = [res];
    });
  }

  ngOnInit() {
    this.createAnimations();
    this.contactAnim.play();
    document.getElementById('container').addEventListener('scroll', (event) => {
      const currentScroll = (event.target as HTMLElement).scrollLeft;

      if (currentScroll > 8000) {
        (event.target as HTMLElement).scrollTo(8000, 0);
        this.allowScroll = false;
      } else {
        this.allowScroll = true;
      }

      // Home
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

        if (this.introFadedOut) {
          this.introFadedOut = false;
          this.introAnimFadeOut.direction('reverse').play();
        }
      }

      if (currentScroll > 60) {
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

        if (!this.introFadedOut) {
          this.introFadedOut = true;
          this.introAnimFadeOut.direction('normal').play();
        }
      }

      // Coding
      if (currentScroll >= 1500) {
        this.showCoding = true;

        if (!this.codingAnimFadeOut) {
          setTimeout(() => {
            if (!this.codingAnimFadeOut) {
              this.codingAnimFadeOut = this.animationCtrl.create()
              .addElement(document.querySelector('.coding'))
              .duration(2500)
              .fromTo('opacity', '1', '0');
            }
          }, 100);
        }
      }

      if (currentScroll >= 1500 && currentScroll <= 2500) {
        if (this.codingFadedOut && this.codingAnimFadeOut) {
            this.codingFadedOut = false;
            this.codingAnimFadeOut.direction('reverse').play();
        }
      }

      if (currentScroll < 1500 || currentScroll > 2500) {
        if (!this.codingFadedOut && this.codingAnimFadeOut) {
          this.codingFadedOut = true;
          this.codingAnimFadeOut.direction('normal').play();
        }
      }

      // Running
      if (currentScroll >= 3500) {
        this.showRunning = true;

        if (!this.runningAnimFadeOut) {
          setTimeout(() => {
            if (!this.runningAnimFadeOut) {
              this.runningAnimFadeOut = this.animationCtrl.create()
              .addElement(document.querySelector('.running'))
              .duration(1000)
              .fromTo('opacity', '1', '0');
            }
          }, 100);
        }
      }

      if (currentScroll >= 3500 && currentScroll <= 4500) {
        if (this.runningFadedOut && this.runningAnimFadeOut) {
            this.runningFadedOut = false;
            this.runningAnimFadeOut.direction('reverse').play();
        }
      }

      if (currentScroll < 3500 || currentScroll > 4500) {
        if (!this.runningFadedOut && this.runningAnimFadeOut) {
          this.runningFadedOut = true;
          this.runningAnimFadeOut.direction('normal').play();
        }
      }

      // Cooking
      if (currentScroll >= 5500) {
        this.showCooking = true;

        if (!this.cookingAnimFadeOut) {
          setTimeout(() => {
            if (!this.cookingAnimFadeOut) {
              this.cookingAnimFadeOut = this.animationCtrl.create()
              .addElement(document.querySelector('.cooking'))
              .duration(1000)
              .fromTo('opacity', '1', '0');
            }
          }, 100);
        }
      }

      if (currentScroll >= 5500 && currentScroll <= 6500) {
        if (this.cookingFadedOut && this.cookingAnimFadeOut) {
            this.cookingFadedOut = false;
            this.cookingAnimFadeOut.direction('reverse').play();
        }
      }

      if (currentScroll < 5500 || currentScroll > 6500) {
        if (!this.cookingFadedOut && this.cookingAnimFadeOut) {
          this.cookingFadedOut = true;
          this.cookingAnimFadeOut.direction('normal').play();
        }
      }

      // Credits
      if (currentScroll >= 7500) {
        this.showCredits = true;

        if (!this.creditsAnimFadeOut) {
          setTimeout(() => {
            if (!this.creditsAnimFadeOut) {
              this.creditsAnimFadeOut = this.animationCtrl.create()
              .addElement(document.querySelector('.credits'))
              .duration(1000)
              .fromTo('opacity', '1', '0');
            }
          }, 100);
        }
      }

      if (currentScroll >= 7500 && currentScroll <= 8500) {
        if (this.creditsFadedOut && this.creditsAnimFadeOut) {
            this.creditsFadedOut = false;
            this.creditsAnimFadeOut.direction('reverse').play();
        }
      }

      if (currentScroll < 7500 || currentScroll > 8500) {
        if (!this.creditsFadedOut && this.creditsAnimFadeOut) {
          this.creditsFadedOut = true;
          this.creditsAnimFadeOut.direction('normal').play();
        }
      }

    });
  }

  createAnimations() {
    this.contactAnim = this.animationCtrl.create()
    .addElement(document.querySelector('.contact'))
    .duration(200)
    .fromTo('bottom', '-32px', '5px');

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

    this.introAnimFadeOut = this.animationCtrl.create()
    .addElement(document.querySelector('.intro'))
    .duration(1000)
    .fromTo('opacity', '1', '0');
  }

  setAllowScroll(allow) {
    this.allowScroll = allow;
  }

  runTo(position) {
    const container = document.getElementById('container');

    if (container.scrollLeft < position) {
      const interval = setInterval(() => {
        container.scrollTo(container.scrollLeft + 10, 0);
        if (container.scrollLeft >= position) {
          clearInterval(interval);
        }
      }, 1);
    } else {
      const interval = setInterval(() => {
        container.scrollTo(container.scrollLeft - 10, 0);
        if (container.scrollLeft <= position) {
          clearInterval(interval);
        }
      }, 1);
    }
  }

  open(url) {
    window.open(url, '_blank');
  }
}
