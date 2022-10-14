import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './sign-up.component';
import { FormModule } from '../form/form.module';
import { SignUpRoutingModule } from './sign-in-routing.module';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    SignUpRoutingModule
  ]
})
export class SignUpModule { }
