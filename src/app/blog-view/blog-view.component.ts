import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService} from "../blog-http.service";
import { Location } from '@angular/common';
import { ToastrManager } from 'ng6-toastr-notifications';

import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  //empty object
  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, public blogService:BlogService,public blogHttpService:BlogHttpService,public toastr: ToastrManager,private location: Location) {
  
  }


  ngOnInit() {

    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)


    //calling the function to get the blog with this blogId out of the overall array of blogs

    this.blogHttpService.getSingleBlog(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage)
      }

    )
    
  }


  deleteThisBlog(): any {

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        this.toastr.successToastr('Blog Deleted successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.errorToastr('Some error occured', 'Error');
      }


    )




  }// end delete this blog 

  public goBackToPreviousPage(): any {

    this.location.back();

  }
 

}


