import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

export class UserDataService{
    users:{firstName:string,lastName:string,email:string,gender:string,qualification:string}[] = [];
    editUser = new Subject();
    formObj;
    setForm(obj){
        this.formObj = obj;
    }

    addUser(user:{firstName:string,lastName:string,email:string,gender:string,qualification:string}){
        this.users.push(user);
    }
    getUsers(){
        return this.users;
    }
    geUser(index){
        return this.users[index];
    }

    updateUser(id,val){
        this.users[id].firstName = val.firstName;
        this.users[id].lastName = val.lastName;
        this.users[id].email = val.email;
        this.users[id].gender = val.gender;
        this.users[id].qualification = val.qualification;
    }

    deleteUser(index){
        this.users.splice(index,1);
        console.log(this.users);

    }
}
