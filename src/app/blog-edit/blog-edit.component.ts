import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  //empty object
  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService) {
  }

  ngOnInit() {
    //getting the blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        this.currentBlog = data.data;
      },
      error => {
        console.log(error.errorMessage);
      }
    )

  }// end onInit

  ngOnDestroy() {

  }

  public editThisBlog(): any {
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(

      data => {
        alert("Blog edited successfully");
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 1000)
      },
      error => {
        console.log(error.errorMessage);
        alert("some error occured");
      }
    )
  }//end delete this blog
}


