import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import module for form
import { FormsModule } from '@angular/forms';

//router moudle used for setting up application level route
import {RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

//import statement for service 
import { BlogHttpService } from './blog-http.service';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    //routerModule forRoot method to declare possible routes in application
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'create',component:BlogCreateComponent},
      {path:'edit/:blogId',component:BlogEditComponent},
      {path:'**',component:NotFoundComponent}
    ]),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
