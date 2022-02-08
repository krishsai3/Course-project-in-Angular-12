import { Injectable } from '@angular/core'
import { Post } from './post.model';

// we can convert this normal class into service class by using decorator
@Injectable({ providedIn: 'root' })
export class PostService {
    listOfPosts: Post[] = [
        new Post("Nature",
            "Post 1 description",
            "#imgPath",
            "Me1",
            new Date()),
        new Post("Hampi",
            "Post 2 description",
            "#imgPath",
            "Me2",
            new Date()),
        new Post("Rann of kutch",
            "Post 3 description",
            "#imgPath",
            "Me3",
            new Date()),
    ];
}