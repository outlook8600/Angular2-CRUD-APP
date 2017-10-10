import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users;
 // editObject  = new EventEmitter();
  constructor(private userDataSerice:UserDataService,private route:Router) { }

  ngOnInit() {
    this.users = this.userDataSerice.getUsers();
  }

  onEdit(index){
   this.route.navigate(['/info']);
   setTimeout(()=>{
    this.userDataSerice.editUser.next(index)
   },200)
  }

  onDelete(index){
    this.userDataSerice.deleteUser(index);
  }
}
