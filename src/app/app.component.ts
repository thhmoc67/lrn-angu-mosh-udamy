import { Component } from '@angular/core';
import { LikeComponent } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  
  constructor( private like_count: number, private is_selected : Boolean) {
  
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
