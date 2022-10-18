import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.services';


interface SideNavToggle {
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private readonly authSvc:AuthService) { }

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data:SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed
  }

  // Boton logOut TODO: call the Service
  user$ = this.authSvc.user$;
  async onLogOut():Promise<void>{
    try {
      await this.authSvc.signOut();
    } catch (error) {
      console.log(error)
    }
  }

}
