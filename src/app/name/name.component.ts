import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  employees: Array<Employee> =[];
  constructor() { }

  ngOnInit() {
    
  }

}
