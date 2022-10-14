import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './sign-in.component';
import { FormModule } from '../form/form.module';
import { SignInRoutingModule } from './sign-in-routing.module';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
