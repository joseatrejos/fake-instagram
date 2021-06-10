import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../../../services/users-api.service'
import { RestApiService } from '../../../services/rest-api.service'

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  User: any = {};

  constructor(public usersApi: UsersApiService, public restApi: RestApiService) { }

  ngOnInit() {
    this.usersApi.getUser("1").subscribe((data: {}) => {
      this.User = data;
    });
  }


}
