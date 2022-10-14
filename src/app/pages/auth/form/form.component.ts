import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ACTIONS } from '../../../shared/constants/constants';
import { AuthService } from '../services/auth.services';
import { UserCredentials, User, ApiError } from '@supabase/supabase-js';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




export interface OptionsForm{
  id:string,
  label:string,
}
interface UserResponse extends User, ApiError{}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  authForm !:FormGroup;
  SignIn = ACTIONS.signIn;
  @Input() options!:OptionsForm;

  constructor(
    private readonly fb:FormBuilder,
    private readonly authSvc:AuthService,
    private readonly router:Router
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  async onSubmit():Promise<void>{
    const credentials: UserCredentials = this.authForm.value;
    let actionToCall;

    if  (this.options.id === ACTIONS.signIn){
      actionToCall = this.authSvc.signIn(credentials)
    }else{
      actionToCall = this.authSvc.signUp(credentials)
    }

    try{
      const result = await actionToCall as UserResponse;
      if(result.email){
        this.redirectUser();
      }else{
        Swal.fire({
          text:`${result.message}`,
          background: '#ecf0f3',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,  
        })
        console.log('Notificacion')
      }
    }catch(error){
      console.log(error)
    }
  }

  private initForm():void{
    this.authForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }


  private redirectUser():void{
    this.router.navigate(['/home'])
  }

}
