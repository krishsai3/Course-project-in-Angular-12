import { Post } from "./post.model";
import { Injectable } from "@angular/core";
import { PostService } from "./post.service";
import { HttpClient } from "@angular/common/http";

/*
    Database path
    https://live-posts-2af4a-default-rtdb.firebaseio.com/
*/

@Injectable({ providedIn : 'root' })
export class BackEndService {
    constructor(private _postService : PostService, private _httpClient : HttpClient){}
    saveData(){
       // getting list of posts from post service
       const listOfPosts : Post[] = this._postService.getPosts(); 
       // sending posts to back end
       this._httpClient.put('https://live-posts-2af4a-default-rtdb.firebaseio.com/posts.json',
       listOfPosts).subscribe((res) => {
        console.log(res);
       });
    }
    fetchData(){}
}