import { Dependent } from './Dependent';
import { Benefit } from './Benefit';

export class Employee{
    PayAmount : number
    FirstName: string;
    LastName: string;
    Dependents: Array<Dependent>;
    Benefit : Benefit;
}

