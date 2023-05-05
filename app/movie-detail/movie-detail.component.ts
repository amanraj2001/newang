import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { movie } from '../models/moviedet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  selected!:string
  movname!:string
  constructor(private demo:DataService,private route:ActivatedRoute){
    this.selected=this.demo.seldata
    this.movname=this.demo.mname
  }
  movieArray:Array<movie>=[]

  movieinput={} as movie
  ngOnInit(): void {


    this.demo.moviedetail().subscribe(p=>{
      console.log(p);
      this.movieArray=p
      console.log(this.movieArray);

      // this.movieinput=this.movieArray.find(x=>x.MovieName==this.movname) as movie
      this.movieinput=this.movieArray.find(x=>x.Details.DirectorName==this.selected) as movie
      console.log(this.movieinput);
      this.act=this.movieinput.Details.ActorsNames
          this.vid=this.movieinput.Details.VideoLink
          this.dir=this.movieinput.Details.DirectorName
    })
  }
   act!:Array<string>

   vid!:string
   dir!:string
  but(index:number,movieid:any){
    console.log(movieid);

        console.log(this.movieArray.find(x=>x.MovieID==index+1));

          // this.act = this.movieinput.MovieID
          // console.log(this.act);

          console.log(this.act);
          console.log(this.movieinput);



    }
}
