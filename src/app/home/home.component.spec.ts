import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { EmployeeComponent } from '../employee/employee.component';
import { BenefitSummaryComponent} from '../benefit-summary/benefit-summary.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ,EmployeeComponent,BenefitSummaryComponent ],
      imports :[FormsModule ,HttpClientTestingModule]   
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
