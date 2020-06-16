import { Component, OnInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';

import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit,OnDestroy {

  //empty object
  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, public blogService:BlogService, public blogHttpService:BlogHttpService) {

    console.log("blog-view Constructor is called");

  }


  ngOnInit() {
    console.log("blog view ngOnInit called");
    //getting the blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the fucntion to get the blog with this blogid out of the overall array
    
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);    
        }
    )

    
  }

  ngOnDestroy() {

    console.log("blog view destroyed");
    

  }

 

}


