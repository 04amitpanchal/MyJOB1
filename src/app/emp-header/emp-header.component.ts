import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { emp } from '../classes/employee';
import { GetEmpFieldByEmpidService } from '../services/get-emp-field-by-empid.service';
import { GetEmpByidService } from '../services/get-emp-byid.service';

@Component({
  selector: 'app-emp-header',
  templateUrl: './emp-header.component.html',
  styleUrls: ['./emp-header.component.css']
})
export class EmpHeaderComponent implements OnInit {

  emp_id:string;
  emp_password:string;
first_name:string;
last_name:string;
    Gender:string;
  country:string;
  city:string;
  state:string;
  emp_field:string;
  emp_photo:string;
emp_exp:number;
emp_skill1:string;
emp_skill2:string;
emp_uni:string;
emp_passing_year:string;
emp_qual:string;
selectedFile:File=null;
//  id:string;
emp:emp[]=[];
  constructor(private _route:Router,private _aroute:ActivatedRoute,private getEmpByIdObj:GetEmpByidService,
    private getEmpFieldByEmpIdObj:GetEmpFieldByEmpidService) { }

  ngOnInit() {
    if(this._aroute.snapshot.params['id']==1)
      {
      this.getEmpByIdObj.getEmpById(localStorage.getItem('emp_id')).subscribe(
        (data:any)=>{
           console.log(data);
          this.emp=data;
          this.first_name=data[0].first_name;
          this.last_name=data[0].last_name;
          this.Gender=data[0].Gender;
          this.country=data[0].country;
          this.emp_photo=data[0].emp_photo;
          this.city=data[0].city;
          this.state=data[0].state;
          this.emp_field=data[0].emp_field;
          this.emp_exp=data[0].emp_exp;
          this.emp_skill1=data[0].emp_skill1;
          this.emp_skill2=data[0].emp_skill2;
          this.emp_uni=data[0].emp_uni;
        this.emp_passing_year=data[0].emp_passing_year;
        this.emp_qual=data[0].emp_qual;
        localStorage.setItem('first_name',this.first_name);

        localStorage.setItem('last_name',this.last_name);
        localStorage.setItem('emp_photo',this.emp_photo);
      }
      );
     }
     if(this._aroute.snapshot.params['id']==0)
     {
      this.getEmpByIdObj.getEmpById(localStorage.getItem('emp_profile')).subscribe(
        (data:any)=>{
           console.log(data);
          this.emp=data;
          this.first_name=data[0].first_name;
          this.last_name=data[0].last_name;
          this.Gender=data[0].Gender;
          this.country=data[0].country;
          this.emp_photo=data[0].emp_photo;
          this.city=data[0].city;
          this.state=data[0].state;
          this.emp_field=data[0].emp_field;
          this.emp_exp=data[0].emp_exp;
          this.emp_skill1=data[0].emp_skill1;
          this.emp_skill2=data[0].emp_skill2;
          this.emp_uni=data[0].emp_uni;
        this.emp_passing_year=data[0].emp_passing_year;
        this.emp_qual=data[0].emp_qual;
        localStorage.setItem('first_name',this.first_name);

        localStorage.setItem('last_name',this.last_name);
        localStorage.setItem('emp_photo',this.emp_photo);
        }
      );
     }
  }
  logout()
  {
    localStorage.clear();
    this._route.navigate(['']);
  }


  addEducation()
  {
    this._route.navigate(['addEducation']);
  }
  editEducationDetails()
  {
    this._route.navigate(['editEducation']);
  }
  editProfile()
  {
    this._route.navigate(['updateEmployee']);
  }
  changePassword()
  {
    this._route.navigate(['changePassword']);
  }
  relatedCompany()
  {
    // this.getEmpFieldByEmpIdObj.getEmpfieldByEmp(localStorage.getItem('emp_id')).subscribe(
    //   (data:any)=>{
    //     console.log(data);
    //     this.emp_field=data[0].emp_field;
    //     localStorage.setItem('emp_field',this.emp_field);
    //     // alert(this.emp_field);
    //     this._route.navigate(['Emp-field-wise-Company']);
    //   }
    // );
    localStorage.setItem('emp_field',this.emp_field);
    //  alert(this.emp_field);
    this._route.navigate(['Emp-field-wise-Company']);
  }
}
