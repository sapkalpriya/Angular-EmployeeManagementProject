import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'employeeregister',
  templateUrl: './employeeregister.component.html',
  styleUrls: ['./employeeregister.component.scss']
})
export class EmployeeregisterComponent {

  result : any;
 constructor(private employeeService : EmployeeService) {
  
 }

data = {
  name:"",
  salary:0.0,
  gender:"",
  emergencyContactNumber:"",
  emailId:""


}

flag = false;


  doSubmitForm()
  {
    console.log("Try to submit form");
    console.log("Data :",this.data);


    if(this.data.name == '' || this.data.salary == 0 ||this.data.gender == ''|| this.data.emergencyContactNumber == '' || this.data.emailId == '')
    {
        alert("Field should not be blank ");
        return;
    }

    
    this.employeeService.saveEmployee(this.data).subscribe((response:any) =>{
     this.flag = true;
     
      alert(response.token);
   

   
    }
    
  );
    

  }
   



}
