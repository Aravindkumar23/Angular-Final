import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AnimeRoutingModule } from './anime-routing.module';
import { PosterComponent } from './poster/poster.component';
import { MatIconModule } from '@angular/material/icon';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAnimeComponent } from './add-anime/add-anime.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {
  MatChipEditInput,
  MatChipEditedEvent,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { EditAnimeComponent } from './edit-anime/edit-anime.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { MatBadgeModule } from '@angular/material/badge';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    PosterComponent,
    DisplayComponent,
    AddAnimeComponent,
    EditAnimeComponent,
    LikeDislikeComponent,
    DisplayDetailsComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatChipsModule,
    MatBadgeModule,
    MatDialogModule,
    MatSnackBarModule,
    ShareModule,
  ],
})
export class AnimeModule {}
