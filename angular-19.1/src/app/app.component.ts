import { Component } from '@angular/core';
import { EmployeeComponent } from "./employee/employee.component";

@Component({
  selector: 'app-root',
  imports: [EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-19.1';
}
