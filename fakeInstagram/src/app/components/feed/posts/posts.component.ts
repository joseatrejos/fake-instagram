import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  Post: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadPosts()
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