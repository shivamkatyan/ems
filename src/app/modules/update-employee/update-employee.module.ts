import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateEmployeeComponent } from './update-employee.component';
import { UpdateEmployeeRoutingModule } from './update-employee-routing.module';
import { MaterialModule } from 'src/app/helper-modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout'; 



@NgModule({
  declarations: [UpdateEmployeeComponent],
  imports: [
    CommonModule,
    UpdateEmployeeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class UpdateEmployeeModule { }
