import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  
  constructor( private like_count: number, private is_selected : boolean) {
  
  }
  
  
   onClick() {
    this.like_count+= ( this.is_selected) ? -1 : +1;
    this.is_selected=(!this.is_selected);
    console.log( ` likes= ${this.like_count} , isSelected ${this.is_selected}`);

   }

   getLikeCount(){
      return this.like_count;
   }

   getisSelected(){
     return this.is_selected;
   }
  
}
