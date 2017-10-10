import { UserDataService } from '../shared/user-data.service';
import { test } from 'karma-chrome-launcher';
import { ActivatedRoute,Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;
  defaultGen = 'Male';
  defaultQual = '10th';
  genders = ['Male', 'Female'];
  qualifications = ['10th', "12th", "Diploma", "Degree", "Master"];
  userDetail: {};
  isSaved = true;
  isEdit = false;
  isSaveEnable = true;
  indexVal;
  constructor(private _userDataService: UserDataService, private _route: Router,private activatedRoute:ActivatedRoute) {
   }
  ngOnInit() {
    this._userDataService.editUser.subscribe((index) => {
      this.indexVal = index;
      let singleUser= this._userDataService.geUser(index);
      this.isEdit = true;
      this.isSaveEnable = false;
        this.userForm.form.patchValue({
          firstName:singleUser['firstName'],
          lastName:singleUser['lastName'],
          email:singleUser['email'],
          gender:singleUser['gender'],
          qualification:singleUser['qualification']
        })
    })
  }
  onSubmit() {
    this.isSaved = false;
    this._userDataService.addUser(this.userForm.value);
    this.userForm.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      gender: 'Male',
      qualification: '10th'
    });
  }

  onView() {
    this._route.navigate(['/details']);
  }

  onUpdate(){
    this._userDataService.updateUser(this.indexVal,this.userForm.value);
    this.userForm.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      gender: 'Male',
      qualification: '10th'
    });
    this._route.navigate(['/details']);
  }
}
