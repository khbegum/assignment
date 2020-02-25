import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeListComponent } from './employee-list.component';

import {
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,MatSortModule,

} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Employee } from 'src/app/viewmodels/employeeModel';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';


describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let service:EmployeeServiceService;
 
  
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ],
      imports:[ MatInputModule,
        MatFormFieldModule,HttpClientModule,BrowserAnimationsModule,MatSortModule,
        MatTableModule],
        providers:[EmployeeServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(EmployeeServiceService);
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getEmployees to be hitted',()=>{
     
    const expectedHeroes: Employee[] =
      [{"id":1,"name":"Khairunnisa","role":"Sr Analyst"}, 
      {"id":2,"name":"Sahithi","role":"Sr Analyst"},
      
      {"id":3,"name":"Seetha","role":"SrAnalyst"},
      {"id":4,"name":"Pooja","role":"Analyst"},
      {"id":5,"name":"Sreeja","role":"Analyst"},
      {"id":6,"name":"SreeLekha","role":"SrAnalyst"}];
    let comp= new EmployeeListComponent(service);
    comp.getEmployeesFromService();

    service.getEmployees().subscribe(res=>{
      comp.dataSource.data=res;
      expect(comp.dataSource.data).toEqual(expectedHeroes)})
  })
  fit('switch hit',async()=>{
    let x:Employee
   
    let  expectedHeroes: Employee[] =
      [{"id":1,"name":"Khairunnisa","role":"Sr Analyst"}, 
      {"id":2,"name":"Sahithi","role":"Sr Analyst"},
      
      {"id":3,"name":"Seetha","role":"SrAnalyst"},
      {"id":4,"name":"Pooja","role":"Analyst"},
      {"id":5,"name":"Sreeja","role":"Analyst"},
      {"id":6,"name":"SreeLekha","role":"SrAnalyst"}];
      let comp= new EmployeeListComponent(service);
    comp.getEmployeesFromService();

    service.getEmployees().subscribe(res=>{
      comp.dataSource.data=res;
      expect(comp.dataSource.data.length).toEqual(6)
      comp.applyFilter(event)
      const filterValue = (event.target as HTMLInputElement).value;
    expect( comp.dataSource.filter).toEqual("poo")
      //expect(comp.dataSource.data).toEqual(expectedHeroes)})
    

      
 
  })
  comp.ngAfterViewInit();
  comp.dataSource.sortingDataAccessor(x,name)
  expect(x[name]).toEqual("Khairunnisa")

})
});
