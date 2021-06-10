import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/posts.model';
import { User } from '../models/users.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersApiService {
  
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
  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiURL + '/users')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch
  getUser(id:string): Observable<User> {
    return this.http.get<User>(this.apiURL + '/users/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create
  createUser(user): Observable<User> {
    return this.http.post<User>(this.apiURL + '/users', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update
  updateUser(id, user): Observable<User> {
    return this.http.put<User>(this.apiURL + '/users/' + id, JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete
  deleteUser(id){
    return this.http.delete<User>(this.apiURL + '/users/' + id, this.httpOptions)
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
