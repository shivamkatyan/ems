import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudService } from 'src/app/shared/crud.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  public empForm: FormGroup;
  deptList = [ 'QA', 'Development'];
  constructor(private formBuilder: FormBuilder,
    private crudService: CrudService,
    private sharedService: SharedService) {

    this.empForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      department: ['', Validators.required],
    });

  }

  ngOnInit(): void {
  }
  addEmployee(){
    this.crudService.create(this.empForm.value).subscribe((res)=>{
      this.sharedService.showMessage('Employee added Successfully', 'SUCCESS');
    }, error=>{
      this.sharedService.showMessage('Not able to add employee', 'FAILURE');
    })
  }
  

}
