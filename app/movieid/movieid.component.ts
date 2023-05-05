import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { movie } from '../models/moviedet';

@Component({
  selector: 'app-movieid',
  templateUrl: './movieid.component.html',
  styleUrls: ['./movieid.component.css']
})
export class MovieidComponent implements OnInit{
  moviearr!:Array<movie>
movieinput={} as movie
director!:string
actors!:Array<string>
vid!:string;
constructor(private demo:DataService){}
  ngOnInit(): void {
    this.demo.moviedetail().subscribe(p=>{
      this.moviearr=p
      console.log(this.moviearr);

      this.movieinput=this.moviearr.find(x=>x.MovieName==this.demo.mname) as movie
      console.log(this.movieinput);
      this.director=this.movieinput.Details.DirectorName
      this.actors=this.movieinput.Details.ActorsNames
      this.vid=this.movieinput.Details.VideoLink
    })
  }
}
