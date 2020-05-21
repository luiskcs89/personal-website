import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ParallaxDirective } from './parallax-directive';
import { CharacterDirective } from './character-directive';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxTypedJsModule,
    TranslateModule
  ],
  declarations: [HomePage, ParallaxDirective, CharacterDirective]
})
export class HomePageModule {}
