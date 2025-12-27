import { Component } from '@angular/core';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';
import { EmployeeListComponent } from '../../components/employee-list/employee-list.component';

@Component({
  selector: 'app-employee-page',
  imports: [EmployeeFormComponent, EmployeeListComponent],
  templateUrl: './employee-page.component.html',
  styleUrl: './employee-page.component.css'
})
export class EmployeePageComponent {

}
