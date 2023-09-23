import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { anime } from 'src/app/app.component';

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css']
})
export class AddAnimeComponent {
  animeList:anime[];
  movieForm =this.formBuild.group({
    id:'',
    name: ['',[Validators.required,Validators.minLength(1)]],
    poster: ['',[Validators.required,Validators.minLength(5),Validators.pattern("^http.*")]],
    rating: [0,[Validators.required,Validators.min(0),Validators.max(10)]],
    summary: ['',[Validators.required,Validators.minLength(20)]],
    trailer: ['',[Validators.required,Validators.minLength(5),Validators.pattern("^http.*")]],
    like:0,
    dislike:0,
    releaseyr:'',
  censorRating:'',
  genres:[],
  languages:[],
  cast:[],
  })
 constructor(private Data:DataService,private formBuild:FormBuilder, private route:Router){
  this.animeList = Data.animeList;
 }
  
 get name(){
  return this.movieForm?.get('name');
 }

 get rating(){
  return this.movieForm?.get('rating');
 }
 get poster(){
  return this.movieForm?.get('poster');
 }
 get summary(){
  return this.movieForm?.get('summary');
 }
 get trailer(){
  return this.movieForm?.get('trailer');
 }
  // addMovie(){
  //   const newmovie: Movie ={
  //     src:this.src,
  //     alt:this.alt,
  //     movietitle:this.movietitle,
  //     moviereleaseyr:this.moviereleaseyr,
  //     movielength:this.movielength,
  //     category:this.category,
  //     content:this.content,
  //   }
  //   this.movieService.setMovieList(newmovie);
  // }


  addMovie(){
    if(this.movieForm.valid){
      const newAnime=this.movieForm.value;
      this.Data.AddAnime(newAnime as unknown as anime).subscribe(()=>this.route.navigate(['/anime']))
    }
  }
}
