import { Component, OnInit } from '@angular/core';
import { NameComponent } from '../name/name.component'
import { Employee } from '../Models/Employee';
import { Dependent } from '../Models/Dependent';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Array<Employee> =[];
  
  constructor() { }

  ngOnInit() {
    
  }
  addEmployee(){
    var employee = new Employee();
    employee.PayAmount = 2000;
    this.employees.push(employee);
  }

  addDependent(employee: Employee){
    console.log(employee);

    if(employee.Dependents == null || employee.Dependents == undefined )
    {
      employee.Dependents =[];
    }
    employee.Dependents.push(new Dependent());    
  }
}
