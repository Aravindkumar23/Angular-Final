import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { anime } from 'src/app/app.component';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
id:string='';
Anime!:anime;
constructor(private data:DataService,private route:ActivatedRoute){
  const {id} = this.route.snapshot.params;
  this.id = id;
}

ngOnInit(){
    this.data.getanimeById(this.id).subscribe((an)=>{
      this.Anime=an;
    })
}
}
