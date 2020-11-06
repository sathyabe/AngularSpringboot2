import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor() { }
  employee: Employee = new Employee();


  constructor(private employeeService: EmployeeService,
    private router: Router) { }
  ngOnInit(): void {
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    console.log(this.employee);
    console.log("Admin has logged in");
    if((this.employee.username =="admin@outlook.com" )&&(this.employee.password=="adminpassword"))
    {
      this.goToEmployeeList();
    }else{
      alert("Access denied.<br>Login as:  admin@utlook.com ,Password: adminpassword")
    }

  }
}
