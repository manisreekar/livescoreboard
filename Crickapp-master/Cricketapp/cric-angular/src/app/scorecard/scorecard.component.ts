import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  board:any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
    ) {
}

ngOnInit() {
const param = this.route.snapshot.paramMap.get('id');
if (param) {
const id = param;
this.get(id);
}
}

get(id: string) {
  this.getscoreboard(id).subscribe({
    next: product => this.board = product,
    error: err => console.log(err)
  });
}

getscoreboard(id : string):Observable<any>{
  console.log('https://cricapi.com/api/fantasySummary?apikey=vQIbiNafUtUGYcHe4FuBPshqQKB2&unique_id='+id);
  return this.http.get<any>('https://cricapi.com/api/fantasySummary?apikey=vQIbiNafUtUGYcHe4FuBPshqQKB2&unique_id='+id)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
    );
}
}
