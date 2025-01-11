import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : User[] = [];

  constructor() { }

  getUsers(){
    return [...this.users]
  }

  getUserById(userId:number){
    return this.users.find(u => u.id = userId)
  }

  addUser(user:User){
    this.users.push(user);
  }

  editUser(userId:number ,updatedUser:User){
    const index = this.users.findIndex((u) => u.id === userId);
      this.users[index] = updatedUser;

  }

  deleteUser(userId:number){
    this.users = this.users.filter(user => user.id !== userId);
  }
}
