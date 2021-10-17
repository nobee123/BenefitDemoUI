import { Component, ViewChild,OnInit, Input } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { Employee } from '../Models/Employee';
import { BenefitSummaryComponent} from '../benefit-summary/benefit-summary.component';
import { BenefitCalculatorService } from '../benefit-calculator.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: Array<Employee>;
  displaySummary: boolean;
  @ViewChild(EmployeeComponent) employeeComponent;

  constructor(private benefitCalucatorService : BenefitCalculatorService) {}

  ngOnInit() {
    this.displaySummary = false;
  } 

  calculate(){
    this.displaySummary = true;     
    this.benefitCalucatorService.getBenefitCost(this.employeeComponent.employees)
   
      .subscribe(employees =>
        {
          this.employees = [];
          employees.forEach(employee =>{
              
              this.employees.push(employee)
          });
        });     
  }
}
