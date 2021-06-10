import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsersApiService } from "../../services/users-api.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  @Input() UserDetails = { name: '', username: '', password: '' }

  constructor(
    public restApi: UsersApiService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addUser(dataUser) {
    this.restApi.createUser(this.UserDetails).subscribe((data: {}) => {
      this.router.navigate(['/feed'])
    })
  }

}
