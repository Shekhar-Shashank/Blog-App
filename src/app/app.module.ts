import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//router module used for setting up the application level route
import {RouterModule,Routes} from '@angular/router';





import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';


//import statement for service
import { BlogService } from './blog.service';


//decorators
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
        //routerModule forRoot method to declare the possible routes in application
        RouterModule.forRoot([
          {path:'home',component:HomeComponent},
          {path:'',redirectTo:'home',pathMatch:'full'},
          {path:'about',component:AboutComponent},
          {path:'blog/:blogId',component:BlogViewComponent},
          {path:'create',component:BlogCreateComponent},
          {path:'edit/:blogId',component:BlogEditComponent},
          {path:'**',component:NotFoundComponent}
          
    
        ])
    
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
