import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service'
import { UsersApiService } from '../../../services/users-api.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  Post: any = [];
  User: any = {};

  constructor(public restApi: RestApiService, public usersApi: UsersApiService) { }

  ngOnInit() {
    this.loadPosts();
    this.usersApi.getUser("1").subscribe((data: {}) => {
      this.User = data;
    })
  }

  // Get posts list
  loadPosts() {
    return this.restApi.getPosts().subscribe((data: {}) => {
      this.Post = data;
    })
  }

  // Delete post
  deletePost(id) {
    if (window.confirm('Are you sure that you want to delete?')) {
      this.restApi.deletePost(id).subscribe(data => {
        this.loadPosts()
      })
    }
  }
  
}