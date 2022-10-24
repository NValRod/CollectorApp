import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FormModule } from '../auth/form/form.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { SearcherComponent } from './searcher/searcher.component';
import { NavbarComponent } from './navbar/navbar.component';

 

@NgModule({
  declarations: [
    HomeComponent,
    SearcherComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    FormModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ]
})
export class HomeModule { }