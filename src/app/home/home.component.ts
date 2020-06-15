import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  //declare a dummy variable here
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
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

  constructor(public blogService:BlogService) { 

    console.log("Home component constructor is called");

  }

  ngOnInit() {

    console.log("Home component onInit is called"); 

  }
  ngOnDestroy() {

    console.log("Home component destroyed");

  }

}
