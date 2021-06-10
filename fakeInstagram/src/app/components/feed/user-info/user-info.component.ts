import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../../../services/users-api.service'
import { RestApiService } from '../../../services/rest-api.service'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit {

  User: any = {};
  User2: any = {};
  Users: any = [];

  constructor(public usersApi: UsersApiService, public restApi: RestApiService) { }

  ngOnInit() {
    this.usersApi.getUser("1").subscribe((data: {}) => {
      this.User = data;
    });
    
    this.usersApi.getUser("2").subscribe((data: {}) => {
      this.User2 = data;
    })
  }

  // Get users list
  loadUsers() {
    return this.usersApi.getUsers().subscribe((data: {}) => {
      this.Users = data;
    })
  }
}
