import { Component, OnInit ,ViewChild} from '@angular/core';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
import { Employee } from 'src/app/viewmodels/employeeModel';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private employeeService:EmployeeServiceService){

  }
   
  employee:Employee[]=[];
displayedColumns = ['id', 'name', 'role'];
dataSource = new MatTableDataSource<Employee>(this.employee);

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  ngOnInit() {
this.getEmployeesFromService()
    this.dataSource.sort = this.sort;
  }
  getEmployeesFromService(){
    this.employeeService.getEmployees().subscribe((res)=>{
this.dataSource.data=res;

    })

  } 
 
  applyFilter(value:string){
    const filterValue = value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter)
  }
}
