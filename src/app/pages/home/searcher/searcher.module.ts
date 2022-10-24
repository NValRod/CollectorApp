import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './searcher.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormModule } from '../../auth/form/form.module';
import { SearcherRoutingModule } from './sarcher-routing.module';



@NgModule({
  declarations: [
    SearcherComponent
  ],
  imports: [
    CommonModule,
    SearcherRoutingModule, 
    RouterModule,
    FormModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ]
})
export class SearcherModule { }
