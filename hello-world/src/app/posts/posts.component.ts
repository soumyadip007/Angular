
//import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit  {

  posts:any[];
  private url ='https://jsonplaceholder.typicode.com/posts';

  // constructor(private http : Http) {

  // }

  constructor(private service : PostService) {

  }

    ngOnInit(){
      
    //this.http.get('https://jsonplaceholder.typicode.com/posts' )
    this.service.getPosts()
    .subscribe( response => {
      this.posts=response.json();
      console.log(response.json());
 
    });
  }

  createPost(input : HTMLInputElement)
  {
    let post={ title: input.value};
    input.value='';

    this.service.createPost(post)
    .subscribe( response => {
      post['id']= response.json().id;
      this.posts.splice(0,0,post);
      console.log(response.json());
    });
  }

  updatePost(post)
  {

//    this.http.patch(this.url+'/'+post.id, JSON.stringify({isRead : true}))
  this.service.updatePost(post)
    .subscribe( response => {
      console.log(response.json());
    });
  }

  deletePost(post)
  {

    //this.http.delete(this.url+'/'+post.id)
    this.service.updatePost(post)
    .subscribe( response => {
      let index= this.posts.indexOf(post);
      this.posts.splice(index,1);
      console.log(response.json());
    });
  }


}