import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/shared/crud.service';
import { EmployeeDataModel } from 'src/app/models/EmployeeData.model';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  employeeList: EmployeeDataModel[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'department', 'action'];
  constructor(private crudService: CrudService,
    private sharedService: SharedService,
    private router: Router) { }
  ngOnInit(): void {
    this.getEmpList()
  }
  getEmpList() {
    this.crudService.getAll().subscribe(
      data => {
        this.employeeList = data;
      },
      error => {
        console.log(error);
      });
  }
  deleteEmp(empId) {
    this.crudService.delete(empId).subscribe((res) => {
      this.sharedService.showMessage('Employee deleted Successfully', 'SUCCESS');
      this.getEmpList();
    }, error => {
      this.sharedService.showMessage('Not able to delete employee', 'FAILURE');
    })
  }
  updateEmp(empId) {
    this.router.navigate(['update-emp'], { state: { update: false, id: empId } });
  }
  detailEmp(empId) {
    this.router.navigate(['update-emp'], { state: { update: true, id: empId } });
  }

}
