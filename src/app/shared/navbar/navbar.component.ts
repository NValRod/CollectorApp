import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../pages/auth/services/auth.services';
import { Router } from '@angular/router';
import { event } from 'jquery';

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

  public body = document.querySelector<any>("body")
  sidebar = this.body.querySelector(".sidebar")
  toggle = this.body.querySelector(".toggle")
  searchBtn = this.body.querySelector(".search-box")
  modeSwitch = this.body.querySelector(".toggle-switch")
  modeText = this.body.querySelector(".mode-text")
  
  // public show = console.log(this.body)

  toggleIn(): void {
    this.toggle = this.sidebar.classList.toggle("close");
    console.log('works!');
  }

  changeModeSwitch(): void {
    this.modeSwitch = this.body.classList.toggle("dark");
    console.log('works!');
  }
  // function modeSwitch.addEventListener("click",() =>{
  //   body.classList.toggle("dark")
  // })
}
