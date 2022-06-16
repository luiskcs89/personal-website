import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { WorkPage } from './work.page';

import { WorkPageRoutingModule } from './work-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkPageRoutingModule,
    NgxTypedJsModule,
    TranslateModule
  ],
  declarations: [WorkPage]
})
export class WorkPageModule {}
