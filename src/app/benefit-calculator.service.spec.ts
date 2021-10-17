import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { BenefitCalculatorService } from './benefit-calculator.service';

describe('BenefitCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: BenefitCalculatorService = TestBed.get(BenefitCalculatorService);
    expect(service).toBeTruthy();
  });
});
