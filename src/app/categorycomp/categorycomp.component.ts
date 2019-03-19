import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';
@Component({
  selector: 'app-categorycomp',
  templateUrl: './categorycomp.component.html',
  styleUrls: ['./categorycomp.component.css']
})
export class CategorycompComponent implements OnInit {
  filtervalue = {
    Category: "",
    Size: "",
    color: ""
  }
  constructor(private service: MyserviceService) {

  }
  ngOnInit() {

  }

  func1(){
    var x = document.getElementById("drop1");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  func2(){
    document.getElementById("drop2");
  }
  func3(){
    document.getElementById("drop3");
  }
  filter(key,value) {
    this.filtervalue[key] = value;
    console.log(key,value);
    this.service.setData(this.filtervalue);
  }
}