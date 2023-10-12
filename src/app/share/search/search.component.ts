import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { anime } from 'src/app/app.component';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  AnimeList: any = [];
  @Input() anime: any;
  constructor(private formBuild: FormBuilder, private data: DataService) {}
  searchForm = this.formBuild.group({
    search: '',
  });
  get search() {
    return this.searchForm.get('search');
  }
  ngOnInit() {
    this.search?.valueChanges
      .pipe(
        debounceTime(1500),
        distinctUntilChanged(),
        switchMap((name) => this.data.search(name || ''))
      )
      .subscribe((mvList) => {
        this.AnimeList = mvList;

        this.data.changeAnimeList(this.AnimeList);
      });
  }
}
