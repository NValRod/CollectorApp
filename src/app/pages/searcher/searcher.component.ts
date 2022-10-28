import { Component, OnInit } from '@angular/core';

export interface userData{
  nameCompany:string;
  name: string;
  lastname:string;
  id: number;
  phoneNumber: number;
  email: string;
  debt:string;
  lastDatePay:string;
  observations:string;
}

const ELEMENT_DATA: userData[] = [
  {nameCompany:'Bancolombia',  id: 520548, name: 'CLAUDIA PATRICIA', lastname:' DE VERA',  phoneNumber: 3001234567, email: 'test@gmail.com', debt: '343.000', lastDatePay:'19/01/2017', observations:'Titular se encuentra en mora es bastante renuente, se debe llevar a proceso civil de minima cuantia. '}
  // {nameCompany:'Bancolombia',  id: 719502, name: 'GIL ESCOBAR ALBERTO ', phoneNumber: 3001234567, email: 'test@gmail.com', debt: 360000 , lastDatePay:'20/06/2019'},
  // {nameCompany:'Av Villas',  id: 552493, name: 'lilibeth iseda muñoz', phoneNumber: 3001234561, email: 'test@gmail.com', debt: 250000, lastDatePay:'25/01/2015'},
  // {nameCompany:'BBVA',  id: 801652, name: 'CESAR AUGUSTO JIMENEZ ARENAS', phoneNumber: 3001234234, email: 'test@gmail.com', debt: 450000, lastDatePay:'26/10/2015'},
  // {nameCompany:'Banco de Bogotá',  id: 328433, name: 'YENIYS GRANADOS MEZA', phoneNumber: 3001234567, email: 'test@gmail.com', debt: 900000, lastDatePay:'26/10/2015'},
  // {nameCompany:'Davivienda',  id: 524613, name: 'CONTRERAS MORENO MONICA  MARCELA', phoneNumber: 3001234567, email: 'test@gmail.com', debt: 343000, lastDatePay:'26/10/2015'},
  // {nameCompany:'Banco de Bogotá',  id: 574239, name: 'LINDA VIÑAS PEREZ', phoneNumber: 3001234567, email: 'test@gmail.com', debt: 820000, lastDatePay:'26/10/2015'},
];
@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {


  displayedColumns: string[] = ['nameCompany','cedula', 'name', 'phoneNumber', 'email','debt','lastDatePay'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
