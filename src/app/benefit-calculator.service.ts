import { Injectable } from '@angular/core';
import { Employee } from './Models/Employee';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept':'*/*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class BenefitCalculatorService {
  
  private benefitCalculationUrl = 'http://localhost:2207/api/Benefit';
  constructor(private http: HttpClient) { }
  getBenefitCost(employees : Array<Employee>) : Observable<Employee[]> {
     //return this.http.post<BenefitSummary>(this.benefitCalculationUrl)
     return this.http.post<Array<Employee>>(this.benefitCalculationUrl, employees, httpOptions);
  }
}
