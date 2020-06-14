import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

  //declare a dummy variable here
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": ["humour","Standup comedy"],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 1 description",
      "title": "This is a blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-21T21:47:51.678Z",
      "created": "2017-10-21T21:47:51.678Z",
      "tags": [],
      "author": "Shashank",
      "category": "Horror",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>This is big text </h1> <p> Small text</p>",
      "description": "This is the description of the example blog and this is an example blog",
      "title": "This is an example blog"

    },
    {
      "blogId": "3",
      "lastModified": "2017-11-14T14:15:54.407Z",
      "created": "2017-11-14T14:15:54.407Z",
      "tags": [],
      "author": "Shekhar",
      "category": "Thriller",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is the blog body. This is the blog body",
      "description": "This is the description of the third blog",
      "title": "This is the third blog"
    }

  ]

  constructor(private _route: ActivatedRoute, private router: Router) {

    console.log("Constructor is called");

  }


  ngOnInit() {
    console.log("ngOnitcalled");
    //getting the blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    //this.currentBlog = this.blogService.getSingleBlog(myBlogId);
    this.getSingleBlogInformation(myBlogId);

  }

  public getSingleBlogInformation(currentBlogId): any {
    //using a for of loop here for type script

    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }

    console.log(this.currentBlog);

  }// end get blog information function

}


