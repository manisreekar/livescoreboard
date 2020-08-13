import { Component, OnInit } from '@angular/core';
import { HomeService } from 'app/helpers/services/home.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
oldMatches:any;
  constructor(
    private homeservice :HomeService
  ) {
   }

  ngOnInit() {
    this.homeservice.getOldMaches().subscribe((resp)=>{
      console.log("old match",resp);
      this.oldMatches = resp.response.data;
    },
    (err)=>{
      console.log("falied to get response from the srever !");
    })

  }

}
