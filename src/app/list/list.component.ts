import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  userList: User[] = []
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userList = this.userService.getUsers()
  }

}
