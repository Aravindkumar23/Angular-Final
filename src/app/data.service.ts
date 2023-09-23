import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { anime } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  animeList:Array<anime>=[];
  constructor(private http:HttpClient) { }

  getanimeList(){
    return this.http.get<anime[]>(`https://650ea69f54d18aabfe995689.mockapi.io/Anime`);
  }
  AddAnime(anime:anime){
    return this.http.post(`https://650ea69f54d18aabfe995689.mockapi.io/Anime`,anime)
  }
}
