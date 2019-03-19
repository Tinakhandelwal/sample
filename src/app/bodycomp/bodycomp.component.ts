import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';
import { RouterModule, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-bodycomp',
  templateUrl: './bodycomp.component.html',
  styleUrls: ['./bodycomp.component.css']
})
export class BodycompComponent implements OnInit {
 public obj:any;
 hideElement=false;
  constructor(private _products:MyserviceService,private router:Router) {
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        if(router.url === 'bookcomp'){
          this.hideElement = true;
        }
        else{
          this.hideElement = false;
        }
      }
    
    })
    this.obj= this._products.getdata();
    this._products.arrobj.subscribe((data)=>{
      this.obj = data;
    });
  
   }
   
  ngOnInit() {
  }
}
  
 

