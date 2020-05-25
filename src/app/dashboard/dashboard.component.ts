import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title="Welcome";
  tittle: any;

  constructor(private ar : ActivatedRoute) {
    this.tittle = this.ar.snapshot.params.id;
   }

  ngOnInit(): void {
  }

}
