import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post? : Post;
  @Input() index : number = 0;

  constructor(private _postService : PostService, private _router : Router) { }

  ngOnInit(): void {
   console.log(this.post);
  }

  onDelete(){
    this._postService.deletePost(this.index);
  }

  onEdit()
  {
    this._router.navigate(["/post-edit",this.index]);
  }
}
