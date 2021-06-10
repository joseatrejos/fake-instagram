import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/posts.model';
import { User } from '../models/users.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'https://my-json-server.typicode.com/joseatrejos/fake-instagram';

  constructor(private http: HttpClient) { }

  /* -------------------------------
  CRUD Methods to consume RESTful APIs 
  --------------------------------- */

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch list
  getPosts(): Observable<Post> {
    return this.http.get<Post>(this.apiURL + '/posts')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch post
  getPost(id:string): Observable<Post> {
    return this.http.get<Post>(this.apiURL + '/posts/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create post
  createPost(post): Observable<Post> {
    return this.http.post<Post>(this.apiURL + '/posts', JSON.stringify(post), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API put() method => Update post
  updatePost(id, post): Observable<Post> {
    return this.http.put<Post>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete post
  deletePost(id){
    return this.http.delete<Post>(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
