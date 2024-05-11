import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  empName:string = "MAXWELL"

  empImage:string="https://cdn-icons-png.flaticon.com/512/6818/6818210.png"

  empDesg:string=""
  empSalary:string=""

  userAdd = ()=>{
    alert('add button clicked')
  }

  getUsername(event:any){
  console.log(event.target.value);
  
  }
  getUser(user:any){
    console.log(user);
    /* alert(`employee name is ${user.value}`) */
    this.empName = user.value

  }
  getUserDetails(user:any,desg:any,sal:any){
    /* if(!user.value || !desg.value || !sal.value){
      alert('please fill the form completely')
    }
    else{
      alert(`Employee name is ${user.value} \n
      Employee Desgination is ${desg.value} \n
      Employee salary is ${sal.value} \n`)
    } */

    if(!user.value || !this.empDesg || !this.empSalary){
      alert('please fill the form completely')
    }
    else{
      alert(`Employee name is ${user.value} \n
      Employee Desgination is ${this.empDesg} \n
      Employee salary is ${this.empSalary} \n`)
    } 

  }
}
