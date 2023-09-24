import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent {
@Input() like:number = 0;
@Input() dislike:number =0;
@Output() likeCount = new EventEmitter<number>();
@Output() disLikecount = new EventEmitter<number>();

incrementLike(){
  this.like++;
  this.likeCount.emit(this.like);
}
incrementDislike(){
  this.dislike++;
  this.disLikecount.emit(this.dislike);
}
}
