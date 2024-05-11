import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

constructor(private ds:DataService){}

  dashemail:string = this.ds.email
  dashpswd:string=this.ds.pswd

userDetail:any=[
  {name:'max',age:'25'},
  {name:'hashir',age:'21'},
  {name:'Raihan',age:'27'},
  {name:'nibin',age:'30'},

]

  



}
