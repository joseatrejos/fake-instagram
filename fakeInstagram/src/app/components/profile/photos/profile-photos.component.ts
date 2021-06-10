import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service'

@Component({
  selector: 'app-profile-photos',
  templateUrl: './profile-photos.component.html',
  styleUrls: ['./profile-photos.component.css']
})

export class ProfilePhotosComponent implements OnInit {

  Post: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadPosts()
  }

  // Get posts list
  loadPosts() {
    return this.restApi.getPosts().subscribe((data: {}) => {
      this.Post = data;
    })
  }

}