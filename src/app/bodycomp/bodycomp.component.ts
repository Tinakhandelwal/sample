import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';
@Component({
  selector: 'app-bodycomp',
  templateUrl: './bodycomp.component.html',
  styleUrls: ['./bodycomp.component.css']
})
export class BodycompComponent implements OnInit {

  constructor(private products:MyserviceService) { }
   
  ngOnInit() {
    console.log("teena");
  }
   this.obj= this.data.getdata();
  this.products.arrobj.subscribe((data)=>{
    this.obj = data;
  });

  public obj =[];
 

