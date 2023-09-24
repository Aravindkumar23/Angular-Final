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
  getanimeById(id:string){
    return this.http.get<anime>(`https://650ea69f54d18aabfe995689.mockapi.io/Anime/${id}`);
  }
  AddAnime(anime:anime){
    return this.http.post(`https://650ea69f54d18aabfe995689.mockapi.io/Anime`,anime)
  }
  editAnime(anime:anime){
    const id =anime.id;
    return this.http.put(`https://650ea69f54d18aabfe995689.mockapi.io/Anime/${id}`,anime)
  }
  deleteAnime(id:string){
    return this.http.delete(`https://650ea69f54d18aabfe995689.mockapi.io/Anime/${id}`);
  }
}
