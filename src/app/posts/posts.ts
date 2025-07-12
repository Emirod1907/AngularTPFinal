import { Component, inject } from '@angular/core';
import { Post } from '../services/post.service'
import { PostsService } from '../services/post.service'
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-posts',
  imports: [Navbar],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {
  posts: Post[] = []
  loading: boolean = true
  error: string | null = null
  private postService = inject(PostsService)
  ngOnInit(){
    let observable = this.postService.getPosts()
    observable.subscribe(
      {
        next: (posts)=>{
          this.posts = posts
          this.loading=false
          console.log("el observable cambió de estado")
        },
        error: (error)=>{
          console.log("el observable falló en ejecución", error)
          this.error = 'Fallo critico al obtener posteos'
          this.loading = false
        }
      }
    )
  }
}
