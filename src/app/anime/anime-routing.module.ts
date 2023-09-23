import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosterComponent } from './poster/poster.component';
import { DisplayComponent } from './display/display.component';
import { AddAnimeComponent } from './add-anime/add-anime.component';

const routes: Routes = [
  {path:'',component:DisplayComponent},
  {path:'add',component:AddAnimeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
