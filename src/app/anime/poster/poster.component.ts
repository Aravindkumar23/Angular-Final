import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { anime } from 'src/app/app.component';
import { DataService } from 'src/app/data.service';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { LANGUAGES } from '../add-anime/global';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditAnimeComponent } from '../edit-anime/edit-anime.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],
})
export class PosterComponent {
  @Output() removeanime = new EventEmitter();
  @Input() Anime: anime = {
    id: '',
    title: '',
    rating: 0,
    poster: '',
    summary: '',
    trailer: '',
    like: 0,
    dislike: 0,

    censorRating: '',
    genres: [],
    languages: [],
  };

  Languages = LANGUAGES;
  value: boolean = true;
  LikeSubject = new Subject<number>();
  DislikeSubject = new Subject<number>();
  constructor(
    private router: Router,
    private data: DataService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    this.LikeSubject.pipe(
      debounceTime(2000),
      switchMap((count) => {
        this.Anime = { ...this.Anime, like: count };
        return this.data.editAnime(this.Anime);
      })
    ).subscribe();
    this.DislikeSubject.pipe(
      debounceTime(2000),
      switchMap((count) => {
        this.Anime = { ...this.Anime, dislike: count };
        return this.data.editAnime(this.Anime);
      })
    ).subscribe();
  }

  // viewEdit() {
  //   this.router.navigate(['/anime/edit', this.Anime.id]);
  // }
  ngOnInit() {
    // this.sendDataToService();
  }

  // sendDataToService() {
  //   for (let i = 0; i < 10; i++) {
  //     this.idvalues.push(this.Anime.id);
  //   }

  // }
  performDelete() {
    this.data.deleteAnime(this.Anime.id).subscribe(() => {
      this.removeanime.emit();
    });
  }

  updateLikecount(count: number) {
    this.LikeSubject.next(count);
  }

  updatedisLikecount(count: number) {
    this.DislikeSubject.next(count);
  }

  toggle() {
    this.value = !this.value;
  }

  gotoMovieDetail() {
    this.router.navigate([`anime/details/${this.Anime.id}`]);
  }
  getLabelLanguages(language: string) {
    return LANGUAGES.find((data) => data.value === language)?.label;
  }
  openConfirmDialog() {
    return this.dialog.open(DeleteDialogComponent, {
      maxWidth: '450px',
      data: { message: 'Are you sure you want to delete this anime?' },
    });
  }
  openEditDialog(id: any) {
    this.data.setData(id);
    return this.dialog.open(EditAnimeComponent, {
      minWidth: '400px',
      data: { posterid: id },
    });
  }
  deleteAnime() {
    this.openConfirmDialog()
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.performDelete();
          this.openSnackBar('Close');
        }
      });
  }
  openSnackBar(action: string) {
    this.snackbar.open('Deleted Successfully', action);
  }
}
