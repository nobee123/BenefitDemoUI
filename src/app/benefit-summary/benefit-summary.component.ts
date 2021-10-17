import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-benefit-summary',
  templateUrl: './benefit-summary.component.html',
  styleUrls: ['./benefit-summary.component.css']
})
export class BenefitSummaryComponent implements OnInit {
  
  @Input() employees : Array<Employee>;
  constructor() { }

  ngOnInit() {
    
  }
}
