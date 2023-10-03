import { Component } from '@angular/core';
import { anime } from 'src/app/app.component';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { AddAnimeComponent } from '../add-anime/add-anime.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  animeList: Array<anime> = [];
  getanimeList: Subscription | any;

  constructor(private data: DataService, private dialog: MatDialog) {}

  ngOnInit() {
    this.LoadData();
  }
  LoadData() {
    this.getanimeList = this.data.getanimeList().subscribe((anime) => {
      this.animeList = anime;
    });
  }

  ngOnDestroy() {
    this.getanimeList.unsubscribe();
  }
  openAddDialog() {
    return this.dialog.open(AddAnimeComponent, { minWidth: '400px' });
  }
}
