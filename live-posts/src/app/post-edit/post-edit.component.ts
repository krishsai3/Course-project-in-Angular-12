import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  form!: FormGroup;
  index : number = 0;
  editMode = false;

  constructor(private _postService : PostService, private _router : Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath = '';
    let comments = [''];

    this._activatedRoute.params.subscribe((params : Params) => {
      if (params['index']){
        this.index = params['index'];

        const post : Post = this._postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;
        comments = post.comments;

        this.editMode = true;
      }
    });
    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
      comments : new FormControl(comments,[Validators.required])
    })
  }

  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;
    const comments = this.form.value.comments;

    const post: Post = new Post(title, description, imagePath, 'test@gmail.com', new Date(),0,comments);


    if(this.editMode){
      this._postService.updatePost(this.index,post);
    }
    else{
      this._postService.addPost(post);
    }

    this._router.navigate(["/post-list"]);
  }
}
