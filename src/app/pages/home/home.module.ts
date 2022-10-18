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
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component' 

 

@NgModule({
  declarations: [
    HomeComponent,
    SearcherComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
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