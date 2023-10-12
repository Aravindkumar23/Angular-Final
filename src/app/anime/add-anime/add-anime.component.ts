import { Component, Inject } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { anime } from 'src/app/app.component';
import { LANGUAGES } from './global';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css'],
})
export class AddAnimeComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  languages = LANGUAGES;
  animeList: anime[];
  movieForm = this.formBuild.group({
    title: ['', [Validators.required, Validators.minLength(1)]],
    poster: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    rating: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
    summary: ['', [Validators.required, Validators.minLength(20)]],
    trailer: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    like: 0,
    dislike: 0,

    censorRating: ['', Validators.required],
    genres: this.formBuild.array([]),
    languages: [[], Validators.required],
  });
  constructor(
    private Data: DataService,
    private formBuild: FormBuilder,
    private route: Router,
    public dialogRef: MatDialogRef<AddAnimeComponent>
  ) {
    this.animeList = Data.animeList;
  }

  get title() {
    return this.movieForm?.get('title');
  }
  get censorRating() {
    return this.movieForm?.get('censorRating');
  }
  get rating() {
    return this.movieForm?.get('rating');
  }
  get poster() {
    return this.movieForm?.get('poster');
  }
  get summary() {
    return this.movieForm?.get('summary');
  }
  get trailer() {
    return this.movieForm?.get('trailer');
  }
  get genre() {
    return this.movieForm?.get('genres') as FormArray;
  }
  addGenreName(event: MatChipInputEvent) {
    const name = (event.value || '').trim();
    if (name) {
      this.genre.push(this.formBuild.control(name));
    }
    event.chipInput!.clear();
  }
  removeGenreName(index: number) {
    this.genre.removeAt(index);
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

  Cancel(): void {
    this.dialogRef.close(false);
  }

  addAnime() {
    if (this.movieForm.valid) {
      const newAnime = this.movieForm.value;
      this.Data.AddAnime(newAnime as unknown as anime).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  RefreshAdd() {
    this.addAnime();
    return this.Data.getanimeList;
  }
}
