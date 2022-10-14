import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.services';


@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate{

    constructor (private readonly router:Router, private AuthSvc:AuthService){}

    canActivate(){
        return this.AuthSvc.user$.pipe(
            map(user => {
                if (!user) {
                    this.router.navigate(['/sign-in'])
                    return false;
                }
                return true;
            })
        );
    }   
}