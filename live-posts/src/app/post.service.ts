import { EventEmitter,Injectable } from '@angular/core'
import { Post } from './post.model';

// we can convert this normal class into service class by using decorator
@Injectable({ providedIn: 'root' })
export class PostService {
    listChangedEvent: EventEmitter<Post[]> =new EventEmitter();
    listOfPosts: Post[] = [
        new Post(
            'Nature',
            'Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.',
            'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg',
            'test@test.com',
            new Date(),
            5,
            ['Beautiful',]
        ),
        new Post(
            'Hampi',
            'Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.',
            'https://www.deccanherald.com/sites/dh/files/article_images/2019/03/15/Hampi-DH-1552611002.jpg',
            'test@test.com',
            new Date(),
            4,
            ['Nice',]
        ),
        new Post(
            'Araku Valley',
            `Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. It's surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the area's numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts.`,
            'https://vizagtourism.org.in/images/places-to-visit/header/araku-valley-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg',
            'test@test.com',
            new Date(),
            3,
            ['Awesome view',]
        ),
    ];

    // facility 1: return post
    getPosts() {
        return this.listOfPosts;
    }

    // facility 2: delete post
    deletePost(index: number) {
        this.listOfPosts.splice(index,1);
    }

    // facility 3: add post
    addPost(post : Post){
        this.listOfPosts.push(post);
    }

    // facility 4 : update a post
    updatePost(index : number,post : Post){
        this.listOfPosts[index] = post;
    }

    // facility 5 : get the post into specified index
    getPost(index : number){
        return this.listOfPosts[index];
    }

    // facility 6 : adding number of likes
    addLikes(index : number){
        this.listOfPosts[index].numberOfLikes +=  1;
    }
    
    // facility 7 : Fetching posts from database
    setPosts(listOfPosts : Post[]){
        this.listOfPosts = listOfPosts;
        this.listChangedEvent.emit(listOfPosts);
    }

    // facility 8 : Adding comments
    addComments(index : number, comment : string){
        this.listOfPosts[index].comments.push(comment);
    }

    removeComments(index : number){
        
    }
}