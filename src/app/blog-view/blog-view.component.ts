import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related code
import {ActivatedRoute, Router} from '@angular/router';
import { BlogHttpService } from '../blog-http.service';

import { Location } from '@angular/common'; 

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {

  //empty object
  public currentBlog;
 
  constructor(private _route : ActivatedRoute, private router : Router,private blogHttpService :BlogHttpService, public location : Location) {

   }

  ngOnInit() {
    this.getSingleBlogInformation();
    
  }
  ngOnDestroy() {
  }

  public getSingleBlogInformation() : any {
    //getting the blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data =>{
        this.currentBlog = data.data;
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }

  public deleteThisBlog() : any {
    this.blogHttpService.deleteThisBlog(this.currentBlog.blogId).subscribe(

      data => {
        
        alert("Blog deleted successfully");
        setTimeout(() => {
          this.router.navigate(['/home']);
        },1000)
      },
      error => {
        
        console.log(error.errorMessage);
        alert("some error occured");
      }
    )
  }//end delete this blog

  //method for go back functionality
  public goBackToThePreviousPage() : any {
    this.location.back();
  }

  public increaseUpvoteCount() : any {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    
    this.blogHttpService.increaseUpvote(myBlogId).subscribe(
      data => {
        this.getSingleBlogInformation();
      },
      error => {
        console.log("some error occured");
        
      }
    )
  }

}
