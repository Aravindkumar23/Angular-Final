import { Component } from '@angular/core';
type anime = {
  id:string,
  title: string,
rating: number,
poster: string,
summary: string,
trailer:string,
like: number,
dislike: number,

censorRating: string,
genres: Array<string>,
languages: Array<string>
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  }
  export{anime};

