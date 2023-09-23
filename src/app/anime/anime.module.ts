import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AnimeRoutingModule } from './anime-routing.module';
import { PosterComponent } from './poster/poster.component';
import {MatIconModule} from '@angular/material/icon';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAnimeComponent } from './add-anime/add-anime.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    PosterComponent,
    DisplayComponent,
    AddAnimeComponent
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,MatButtonModule,MatCardModule,MatIconModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    MatFormFieldModule,MatInputModule
  ]
})
export class AnimeModule { }
