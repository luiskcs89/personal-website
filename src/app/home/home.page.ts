import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  typeString = ['Hi,  I  am  LuisK,  mobile  and  web  app  architect  and  plant  based  marathoner.<br>Welcome  to  my  website!'];
  allowScroll = false;

  constructor() {}

  ngOnInit() {
    document.getElementById('container').addEventListener('scroll', (event) => {
      console.log((event.target as HTMLElement).scrollLeft);
    });
  }

  setAllowScroll(allow) {
    this.allowScroll = allow;
  }
}
