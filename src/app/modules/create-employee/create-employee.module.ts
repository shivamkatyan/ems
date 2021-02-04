import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee.component';
import { CreateEmployeeRoutingModule } from './create-employee-routing.module';
import { MaterialModule } from 'src/app/helper-modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [CreateEmployeeComponent],
  imports: [
    CommonModule,
    CreateEmployeeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class CreateEmployeeModule { }
