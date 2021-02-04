import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/crud.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  public empForm: FormGroup;
  deptList = ['QA', 'Development'];
  empId = '';
  updateFlag = false;
  constructor(private formBuilder: FormBuilder,
    private crudService: CrudService,
    private sharedService: SharedService,
    private router: Router) {
    const currState = this.router.getCurrentNavigation().extras.state;
    if (currState) {
      this.empId = currState.id;
      this.updateFlag = currState.update
    }
    this.empForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      department: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.getEmpData();
  }
  getEmpData() {
    this.crudService.get(this.empId).subscribe((data) => {
      this.patchValues(data);
    },
      error => {
        console.log(error);
      });
  }

  patchValues(data) {
    this.empForm.patchValue(data);
  }

  updateEmp() {
    this.crudService.update(this.empId, this.empForm.value).subscribe((res) => {
      this.sharedService.showMessage('Employee updated Successfully', 'SUCCESS');
    }, error => {
      this.sharedService.showMessage('Not able to update employee', 'FAILURE');
    })
  }



}
