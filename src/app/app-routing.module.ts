import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'home',component:DashboardComponent},
  {path:'',redirectTo:"/home",pathMatch:"full"},
  {path:'anime',loadChildren:() => import('./anime/anime.module').then((m) => m.AnimeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
