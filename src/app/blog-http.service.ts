import { Injectable } from '@angular/core';
//importing http client to make the requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import observable related code
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})

export class BlogHttpService {

  public allBlogs;
  //public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'NDQyNWMxOTNkMzg4ZmMxZDlkNjY4NzNkM2JmNGZmYzQzOTZhZWJmZDJmOWM5OTQ5Mzg3ZmI5M2EyNTg2OGFkMDRmNmM1YjQxZDE5ZmQ3OTNkMDA5Mzk0YTcxOWM2MWViZDdjOGIxOTY4NDExNTc4YzFlN2RkOTllN2IyZTU3N2NkOA==';



  constructor(private _http:HttpClient) {

    console.log("blog-http service was called");
  }

  //  exception handler

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to return all the blogs
  getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl+'/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;



  }

  //method to get a particular blog
  getSingleBlog(blogId): any {

    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + blogId + '?authToken=' + this.authToken)
    return myResponse;

  }// end get single blog 

  createBlog(blogData): any {

    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  } // end create blog

  deleteBlog(blogId): any {

    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data)
    return myResponse;

  }// end delete blog

  editBlog(blogId,blogData): any {

    
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  }// end delete blog



}
