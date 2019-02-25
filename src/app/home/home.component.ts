import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { error } from 'util';

//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//simple class
export class HomeComponent implements OnInit,OnDestroy {
  public allBlogs;

  constructor(public blogHttpService:BlogHttpService) { 
  }

  ngOnInit() {
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      data =>{
        this.allBlogs = data.data;
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }

  ngOnDestroy() {
  }

}
