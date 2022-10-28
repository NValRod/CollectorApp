import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesRoutingModule } from './times-routing.module';
import { TimesComponent } from './times.component';


@NgModule({
  declarations: [
    TimesComponent
  ],
  imports: [
    CommonModule,
    TimesRoutingModule
  ]
})
export class TimesModule { }
