import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { anime } from 'src/app/app.component';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { LANGUAGES } from '../add-anime/global';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-anime',
  templateUrl: './edit-anime.component.html',
  styleUrls: ['./edit-anime.component.css']
})
export class EditAnimeComponent {
  id:string ='';
  separatorKeysCodes: number[] = [ENTER, COMMA];
  languagess=LANGUAGES;
  // anime: anime = {
  //   id: '',
  //   title: '',
  //   poster: '',
  //   rating: 0,
  //   summary: '',
  //   trailer: '',
  //   censorRating:'',
  //   like: 0,
  //   dislike: 0,
  //   genres:[],
  //   languages:[]
  // };
  movieForm =this.formBuild.group({
    id:'',
    title: ['',[Validators.required,Validators.minLength(1)]],
    poster: ['',[Validators.required,Validators.minLength(5),Validators.pattern("^http.*")]],
    rating: [0,[Validators.required,Validators.min(0),Validators.max(10)]],
    summary: ['',[Validators.required,Validators.minLength(20)]],
    trailer: ['',[Validators.required,Validators.minLength(5),Validators.pattern("^http.*")]],
    like:0,
    dislike:0,
    
  censorRating:['',Validators.required],
  genres:this.formBuild.array([]),
  languages:[[""],Validators.required],
  
  })
 constructor(private Data:DataService,private formBuild:FormBuilder, private route:Router,private router:ActivatedRoute){
  const {id} = this.router.snapshot.params;
  this.id =id;

 }
  ngOnInit(){
     this.Data.getanimeById(this.id).subscribe((response)=>
     this.movieForm.patchValue(response)
     )
  }
 get title(){
  return this.movieForm?.get('title');
 }
get censorRating(){
  return this.movieForm?.get('censorRating');
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
 get genre(){
  return this.movieForm?.get('genres') as FormArray;
 }
 addGenreName(event: MatChipInputEvent) {
  const name = (event.value || '').trim();
  if (name) {
    this.genre.push(this.formBuild.control(name));
  }
}
removeGenreName(index: number) {
  this.genre.removeAt(index);
}
  


  editAnime(){
    if(this.movieForm.valid){
      const editAnime=this.movieForm.value;
      this.Data.editAnime(editAnime as unknown as anime).subscribe(()=>this.route.navigate(['/anime']))
    }
  }
}
