import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  userForm: FormGroup;
  users: User[] = [];
  isEditMode: boolean = false;
  private userNextId = 1;
  private editUserId!: number;

  constructor(private fb: FormBuilder, private userService: UserService,private route:ActivatedRoute) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    // this.loadUsers();

    this.userNextId = this.userService.getUsers().length > 0 ? 
      Math.max(...this.userService.getUsers().map(user => user.id)) + 1 : 1;

  }

  // private loadUsers(): void {
  //   this.users = this.userService.getUsers();
  //   this.userNextId = this.users.length > 0 ? 
  //     Math.max(...this.users.map(user => user.id)) + 1 : 1;
  // }

  saveUser(): void {
    if (this.userForm.valid) {
      const userFormValue = this.userForm.value;

      if (this.isEditMode) {
        // Update existing user
        this.userService.editUser(this.editUserId, { ...userFormValue, id: this.editUserId });
        this.isEditMode = false;
      } else {
        // Add new user
        const newUser = { id: this.userNextId++, ...userFormValue };
        this.userService.addUser(newUser);
      }

      this.resetForm();
      // this.loadUsers(); // Refresh user list
    }
  }

  onEditCall(user: User): void {
    this.isEditMode = true;
    this.editUserId = user.id;
    this.userForm.patchValue({
      name: user.name,
      age: user.age,
    });
  }

  onDeleteCall(userId: number): void {
    this.userService.deleteUser(userId);
    // this.loadUsers();
  }

  private resetForm(): void {
    this.userForm.reset();
    this.isEditMode = false;
  }
}
