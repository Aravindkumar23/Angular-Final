import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { anime } from 'src/app/app.component';
import { DataService } from 'src/app/data.service';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { LANGUAGES } from '../add-anime/global';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent {
  @Output() removeanime= new EventEmitter();
  @Input() Anime:anime
    ={
      id:'',
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
  value:boolean = true;
  LikeSubject = new Subject<number>();
  DislikeSubject = new Subject<number>();
  constructor(private router:Router,private data:DataService,private dialog:MatDialog){

    this.LikeSubject.pipe(debounceTime(2000),
    switchMap(
      (count) => 
      {this.Anime = {...this.Anime,like:count};
      return this.data.editAnime(this.Anime);
    })).subscribe();
    this.DislikeSubject.pipe(debounceTime(2000),
    switchMap(
      (count) => 
      {this.Anime = {...this.Anime,dislike:count};
      return this.data.editAnime(this.Anime);
    })).subscribe();
  }

  viewEdit(){
    this.router.navigate(['/anime/edit',this.Anime.id]);
  }
  performDelete(){
    this.data.deleteAnime(this.Anime.id).subscribe(()=>{
      this.removeanime.emit();
    });
  }
  

  updateLikecount(count:number){
    this.LikeSubject.next(count);
  }

  updatedisLikecount(count:number){
    this.DislikeSubject.next(count);
  }

  toggle(){
    this.value=!this.value;
  }

  gotoMovieDetail(){
    this.router.navigate([`anime/details/${this.Anime.id}`])
  }
  // getLabelLanguages(language:Array<string>) {
    
  //   for(const lang of language){
  //     var langu = lang;
  //   } 
  //   return LANGUAGES.find((data) => data.value === langu)?.label;
   
  // }
  openConfirmDialog() {
    return this.dialog.open(DeleteDialogComponent, {
      maxWidth: '450px',
      data: { message: 'Are you sure you want to delete this anime?'},
    });
  }

    deleteAnime(){
      this.openConfirmDialog()
        .afterClosed()
        .subscribe((confirmed: boolean) => {
          if (confirmed) {
            this.performDelete();
          }
        });
        }
   }

