import { Component,Input } from '@angular/core';
import { anime } from 'src/app/app.component';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent {

  @Input() Anime:anime
    ={
      title: "",
    rating: 0,
    poster: "",
    summary: "",
    trailer: "",
    like: 0,
    dislike: 0,
    
    censorRating: "",
    genres: [],
    languages: []
  }
}
