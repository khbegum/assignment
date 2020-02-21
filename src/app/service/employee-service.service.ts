import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from '../viewmodels/employeeModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

ServiceUrl:string="http://localhost:3000/employees/";
getEmployees():Observable<Employee[]>{
  return this.http.get<Employee[]>(this.ServiceUrl);
}
}
