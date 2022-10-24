import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly authSvc:AuthService) { }

  ngOnInit(): void {
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
