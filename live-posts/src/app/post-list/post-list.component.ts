import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[] = [];

  constructor(private _postService : PostService) { }

  ngOnInit(): void {
    this.listOfPosts = this._postService.getPosts();
    this._postService.listChangedEvent.subscribe((listOfPosts : Post[]) => {
      this.listOfPosts = this._postService.getPosts();
    })
  }

}
