import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http'
import { EmployeeServiceService } from './employee-service.service';
import { Employee } from '../viewmodels/employeeModel';
import { Observable } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

import{HttpTestingController,HttpClientTestingModule} from '@angular/common/http/testing'




describe('EmployeeServiceService', () => {
  let service: EmployeeServiceService;
  let httpMock: HttpTestingController;
  let ServiceUrl:string="http://localhost:3000/employees/";
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule,HttpClientTestingModule]})
);
beforeEach(()=>{
  service = TestBed.get(EmployeeServiceService);
  httpMock = TestBed.get(HttpTestingController);
})
    

  it('should be created', () => {
    const service: EmployeeServiceService = TestBed.get(EmployeeServiceService);
    expect(service).toBeTruthy();
  });
 
  
  
  it('should return expected heroes (HttpClient called once)', () => {
    
    const expectedHeroes: Employee[] =
      [{"id":1,"name":"yuui","role":"Sr Analyst"}, 
      {"id":2,"name":"Sahithi","role":"Sr Analyst"}];
  
      service.getEmployees().subscribe(posts => {
        expect(posts.length).toBe(2);
        expect(posts).toEqual(expectedHeroes);
    });
    const request = httpMock.expectOne( `${service.ServiceUrl}`);
expect(request.request.method).toBe('GET');
request.flush(expectedHeroes);
  
    
    
  });
  afterEach(() => {
    httpMock.verify();
});
});
