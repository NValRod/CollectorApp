import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.services';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  user$ = this.authSvc.user$;
  constructor(private readonly authSvc:AuthService) { }

  ngOnInit(): void {
  }
  async onLogOut():Promise<void>{
    try {
      await this.authSvc.signOut();
    } catch (error) {
      console.log(error)
    }
  }
}
