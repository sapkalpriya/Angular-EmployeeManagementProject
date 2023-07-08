import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

result: any

private baseurl: string = "http://localhost:8281";

  constructor(private http : HttpClient) { }

  flag : boolean = false;

  saveEmployee(data:any):Observable<any>
  {

      return this.http.post(`${this.baseurl}/do_register`,data);
   }



}
