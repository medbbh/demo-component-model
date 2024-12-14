import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { User } from '../model/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  user!:User

  constructor(private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    const idUser = Number(this.route.snapshot.paramMap.get('id'))
    this.user = this.userService.getUsers().find(u => u.id = idUser)!
  }

  // @Input()
  // user!: User;

  // @Output() 
  // deleteUser = new EventEmitter<number>();

  // @Output() 
  // editUser = new EventEmitter<User>();

  // onDeleteClick(){
  //   this.deleteUser.emit(this.user.id);
  // }

  // onEditClick(): void {
  //   this.editUser.emit(this.user);
  // }
}
