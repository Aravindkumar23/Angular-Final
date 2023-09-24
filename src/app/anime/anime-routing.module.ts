import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosterComponent } from './poster/poster.component';
import { DisplayComponent } from './display/display.component';
import { AddAnimeComponent } from './add-anime/add-anime.component';
import { EditAnimeComponent } from './edit-anime/edit-anime.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';

const routes: Routes = [
  {path:'',component:DisplayComponent},
  {path:'add',component:AddAnimeComponent},
  {path:'edit/:id',component:EditAnimeComponent},
  {path:'details/:id',component:DisplayDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
