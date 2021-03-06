import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';



//router module used for setting up the application level route
import {RouterModule,Routes} from '@angular/router';





import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';


//import statement for service
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import { HttpClientModule } from '@angular/common/http';


//decorators
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    PostBlogComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
        //routerModule forRoot method to declare the possible routes in application
        RouterModule.forRoot([
          {path:'home',component:HomeComponent},
          {path:'',redirectTo:'home',pathMatch:'full'},
          {path:'about',component:AboutComponent},
          {path:'blog/:blogId',component:BlogViewComponent},
          {path:'create',component:PostBlogComponent},
          {path:'edit/:blogId',component:BlogEditComponent},
          {path:'**',component:NotFoundComponent}
          
    
        ])
    
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
