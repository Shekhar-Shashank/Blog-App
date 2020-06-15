import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs;


  constructor(public blogHttpService:BlogHttpService) { 

    console.log("Home component constructor is called");

  }

  ngOnInit() {

    console.log("Home component onInit is called"); 
    this.allBlogs = this.blogHttpService.getAllBlogs();
    console.log(this.allBlogs);

  }
  ngOnDestroy() {

    console.log("Home component destroyed");

  }

}
