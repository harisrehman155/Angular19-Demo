import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFilterComponent } from "./employee-filter/employee-filter.component";

@Component({
  selector: 'app-employee',
  imports: [EmployeeFilterComponent, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  selectedGender: string = 'all';

  employeeData = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890', address: '123 Main St, Anytown, USA', gender: 'male' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210', address: '456 Elm St, Othertown, USA', gender: 'female' },
    { id: 2, name: 'Jen Milton', email: 'jenmilton@example.com', phone: '987-654-3210', address: '456 Elm St, Othertown, USA', gender: 'female' },
    { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com', phone: '555-123-4567', address: '789 Oak St, Thistown, USA', gender: 'male' },
    { id: 3, name: 'Erick', email: 'erick@example.com', phone: '555-123-4567', address: '789 Oak St, Thistown, USA', gender: 'male' }
  ];

  countAll(): number {
    return this.employeeData.length;
  }
  countMale(): number {
    return this.employeeData.filter(x => x.gender === 'male').length;
  }
  countFemale(): number {
    return this.employeeData.filter(x => x.gender === 'female').length;
  }
  getGenderOnChange(_selectedGender: string): void {
    this.selectedGender = _selectedGender;
  }

}
