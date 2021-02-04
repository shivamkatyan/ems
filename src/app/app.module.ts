import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from './shared/crud.service';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './helper-modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
