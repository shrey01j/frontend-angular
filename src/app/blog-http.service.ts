import { Injectable } from '@angular/core';
//importing http client to make the requests
import { HttpClientModule, HttpErrorResponse, HttpClient } from '@angular/common/http';

//import observable related code
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = "http://localhost:3000/api/v1/blogs"
  private authToken = "Admin"

  constructor(private _http: HttpClient) {
  }

  //method to return all the blogs
  public getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl + '/all?authToken='+this.authToken);
    return myResponse;
  }

  //method to get a particular blog
  public getSingleBlogInformation(currentBlogId): any {

    let myResponse = this._http.get(this.baseUrl + '/view/'+currentBlogId+'/?authToken='+this.authToken);
    return myResponse;
  }//public fn ends

  //method to create a blog
  public createBlog (blogData) : any {
    let myResponse = this._http.post(this.baseUrl+'/create'+'?authToken='+this.authToken,blogData);
    return myResponse;
  }

  //method to delete the blog
  public deleteThisBlog (blogId) : any {
    let data ={}
    let myResponse = this._http.post(this.baseUrl +'/'+blogId+'/delete'+'?authToken='+this.authToken,data);
    return myResponse;
  }

  // method to edit the blog
  public editBlog(blogId, blogData) : any {
    let myResponse = this._http.put(this.baseUrl + '/'+ blogId + '/edit' + '?authToken='+this.authToken,blogData)
    return myResponse;
  }

  public increaseUpvote(blogId) : any {
    let myResponse = this._http.get(this.baseUrl+'/'+blogId+'?authToken='+this.authToken);
    return myResponse;
  }
}
