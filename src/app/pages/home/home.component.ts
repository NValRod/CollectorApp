import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.services';

export interface userData{
  nameCompany:string;
  name: string;
  id: number;
  phoneNumber: number;
  email: string;
  debt:number;
  lastDatePay:string;
}

const ELEMENT_DATA: userData[] = [
  {nameCompany:'Davivienda',  id: 52054628, name: 'CLAUDIA PATRICIA DE VERA', phoneNumber: 3001234567, email: 'test@gmail.com', debt: 343000, lastDatePay:'19/01/2017'},
  {nameCompany:'Davivienda',  id: 71950952, name: 'GIL ESCOBAR ALBERTO ', phoneNumber: 3001234567, email: 'test@gmail.com', debt: 360000 , lastDatePay:'20/06/2019'},
  {nameCompany:'Davivienda',  id: 55249319, name: 'COBA TORRES OLGA LONAYL', phoneNumber: 3001234561, email: 'test@gmail.com', debt: 250000, lastDatePay:'25/01/2015'},
  {nameCompany:'Davivienda',  id: 80165284, name: 'CESAR AUGUSTO JIMENEZ ARENAS', phoneNumber: 3001234234, email: 'test@gmail.com', debt: 450000, lastDatePay:'26/10/2015'},
  {nameCompany:'Davivienda',  id: 32843351, name: 'YENIYS GRANADOS MEZA', phoneNumber: 3001234567, email: 'test@gmail.com', debt: 900000, lastDatePay:'26/10/2015'},
  {nameCompany:'Davivienda',  id: 52461316, name: 'CONTRERAS MORENO MONICA  MARCELA', phoneNumber: 3001234567, email: 'test@gmail.com', debt: 343000, lastDatePay:'26/10/2015'},
  {nameCompany:'Davivienda',  id: 57423947, name: 'LINDA VIÑAS PEREZ', phoneNumber: 3001234567, email: 'test@gmail.com', debt: 820000, lastDatePay:'26/10/2015'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  user$ = this.authSvc.user$;
  displayedColumns: string[] = ['nameCompany','cedula', 'name', 'phoneNumber', 'email','debt','lastDatePay'];
  dataSource = ELEMENT_DATA;

  constructor(private readonly authSvc:AuthService) { }
  async onLogOut():Promise<void>{
    try {
      await this.authSvc.signOut();
    } catch (error) {
      console.log(error)
    }
  }

}
