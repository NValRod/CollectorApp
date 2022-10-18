import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { AuthService } from '../../auth/services/auth.services';

interface SideNavToggle {
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor( private authSvc:AuthService) { }

  ngOnInit(): void {
  }

  
  @Output() onToggleSideNav:EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed= false;
  screenWidth=0;
  navData = navbarData;

  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})
  }

  closeSidenav():void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})
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
