import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs: any;
  errorMessage: any;


  constructor(private blogService:BlogService,public blogHttpService:BlogHttpService) { 

    console.log("Home component constructor is called");

  }

  ngOnInit() {

    //this.allBlogs = this.blogHttpService.getAllBlogs();
    //this.blogHttpService.getAllBlogs();


    
    
    this.blogHttpService.getAllBlogs().subscribe(

      data => {
        console.log(data);
        this.allBlogs = data["data"];
        return this.allBlogs;
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage)
      }

    )
    
  }

  

}
