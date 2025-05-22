import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-employee-filter',
  imports: [FormsModule],
  templateUrl: './employee-filter.component.html',
  styleUrl: './employee-filter.component.css',
  standalone: true
})
export class EmployeeFilterComponent {

  selectedGender = 'all';

  @Input()
  all: number = 0;
  @Input()
  male: number = 0;
  @Input()
  female: number = 0;

  @Output()
  valueFromEmitter: EventEmitter<string> = new EventEmitter<string>();

  onFilterChange(): void {
    this.valueFromEmitter.emit(this.selectedGender);
  }

}
