import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EmployeeComponent } from './employee.component';
import { FormsModule } from '@angular/forms';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addEmployee method', fakeAsync( () => {
    fixture.detectChanges();
    spyOn(component, 'addEmployee');
    let btn = fixture.debugElement.query(By.css('#addEmployeeButton'));
    btn.triggerEventHandler('click', null);
    tick(); 
    fixture.detectChanges();
    expect(component.addEmployee).toHaveBeenCalled();
  }));
});
