import { Component } from '@angular/core';
import { OptionsForm } from '../form/form.component';
import { ACTIONS } from '../../../shared/constants/constants';

@Component({
  selector: 'app-sign-in',
  template: `<app-form [options]="options"></app-form>` ,
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {
  options:OptionsForm = {
    id: ACTIONS.signIn,
    label: ACTIONS.signIn
  }

}
