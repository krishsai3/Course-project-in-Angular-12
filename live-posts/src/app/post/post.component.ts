import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  form! : FormGroup;

  @Input() post? : Post;
  @Input() index : number = 0;

  public commentMode = false;
  public likeMode = true;

  constructor(private _postService : PostService, private _router : Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
        comment : new FormControl(null,[Validators.required]),
      })

   console.log(this.post);
  }

  onDelete(){
    this._postService.deletePost(this.index);
  }

  onEdit()
  {
    this._router.navigate(["/post-edit",this.index]);
  }

  onLike()
  {
    this._postService.addLikes(this.index);
  }

  onComment()
  {
    this.commentMode = true;
    console.log(this.commentMode);
  }

  onSubmit()
  {
    const comment = this.form.value.comment;
    this._postService.addComments(this.index,comment);
    console.log("onSubmit() is called.")
    this.commentMode = false;
    this.form.reset();
  }

  Delete(comment : string){
    this._postService.removeComments(this.index, comment);
    console.log("delete() is called")
  }

  onclick(){
    this.likeMode = !this.likeMode;
  }
}
