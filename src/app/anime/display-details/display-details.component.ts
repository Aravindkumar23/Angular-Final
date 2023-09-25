import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { anime } from 'src/app/app.component';
import { DataService } from 'src/app/data.service';
import { LANGUAGES } from '../add-anime/global';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent {
  id: string = '';
  languages = LANGUAGES;
  Anime!: any;
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    const { id } = this.route.snapshot.params;
    this.id = id;
  }
  getLabelLanguages(language: string) {
    return LANGUAGES.find((data) => data.value === language)?.label;
  }
  ngOnInit() {
    this.data.getanimeById(this.id).subscribe((an) => {
      this.Anime = {
        ...an,
        trailer: this.sanitizer.bypassSecurityTrustResourceUrl(an.trailer),
      };
    });
  }
}
