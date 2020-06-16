import { Injectable } from '@angular/core';
//importing http client to make the requests
import{HttpClient, HttpErrorResponse} from '@angular/common/http';

//import observable
@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';



  constructor() {

    console.log("blog-http service was called");
   }

       //method to return all the blogs
       public getAllBlogs():any {

        
  
      }
  
      //method to get a particular blog
      public getSingleBlogInformation(currentBlogId): any {
    
       
    
      }// end get blog information function
}
