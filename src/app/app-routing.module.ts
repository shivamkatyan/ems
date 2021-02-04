import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'create-emp', loadChildren: () => import('./modules/create-employee/create-employee.module').then(m => m.CreateEmployeeModule)},
  { path: 'list-emp', loadChildren: () => import('./modules/list-employee/list-employee.module').then(m => m.ListEmployeeModule)},
  { path: 'update-emp', loadChildren: () => import('./modules/update-employee/update-employee.module').then(m => m.UpdateEmployeeModule)},
  { path: '', redirectTo: '/create-emp', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
