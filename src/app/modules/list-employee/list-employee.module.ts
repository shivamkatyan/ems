import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee.component';
import { ListEmployeeRoutingModule } from './list-employee-routing.module';
import { MaterialModule } from 'src/app/helper-modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ListEmployeeComponent],
  imports: [
    CommonModule,
    ListEmployeeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class ListEmployeeModule { }
