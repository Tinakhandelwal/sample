import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var arr = [
  {
    "ID": 1,
    "ProductName": "Caravan Bamboo Top",
    "Price": 4200,
    "Category": "Top",
    "ProductImg": '../assets/img8.jpg',
    "Size": "S",
    "color": "Red",
  },
  {
    "ID": 2,
    "ProductName": "Eclipse Shirt",
    "Price": 3600,
    "Category": "Kurta",
    "ProductImg": "../assets/img7.jpg",
    "Size": "M",
    "color": "Pink",
  },
  {
    "ID": 3,
    "ProductName": "Eclipse Kurta",
    "Price": 2000,
    "Category": "Kurta",
    "ProductImg": "../assets/img6.jpg",
    "Size": "L",
    "color": "Red",
  },
  {
    "ID": 4,
    "ProductName": "Sari",
    "Price": 1000,
    "Category": "Sari",
    "ProductImg": "../assets/img9.jpg",
    "Size": "XL",
    "color": "Red",
  },
  {
    "ID": 5,
    "ProductName": "Tribe Sari",
    "Price": 5000,
    "Category": "Kurta",
    "ProductImg": "../assets/img10.jpg",
    "Size": "S",
    "color": "Blue",
  },
  {
    "ID": 6,
    "ProductName": "Nico Dress",
    "Price": 2500,
    "Category": "Dress",
    "ProductImg": "../assets/img11.jpg",
    "Size": "M",
    "color": "Red",
  },
  {
    "ID": 7,
    "ProductName": "White dress",
    "Price": 1500,
    "Category": "Dress",
    "ProductImg": "../assets/img12.jpg",
    "Size": "L",
    "color": "White",
  },
  {
    "ID": 8,
    "ProductName": "Luna Angrakha Kurta",
    "Price": 6500,
    "Category": "Pyjama",
    "ProductImg": "../assets/img13.jpg",
    "Size": "L",
    "color": "White",
  },
  {
    "ID": 9,
    "ProductName": "Luna Printed Tunic",
    "Price": 4500,
    "Category": "Dress",
    "ProductImg": "../assets/img12.jpg",
    "Size": "L",
    "color": "White",
  }
]
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public data: any;
  public arrobj: Subject<any> = new Subject<any>();

  constructor() {
    this.data = [...arr];
  }
  getdata() {
    return this.data;
  }
  setData(filtervalue) {
    this.data = arr;
    this.data = this.data.filter((data) => {
      if ((filtervalue.Category ? data.Category == filtervalue.Category : true) && (filtervalue.Size ? data.Size == filtervalue.Size : true) && (filtervalue.color ? data.color == filtervalue.color : true)) {
        return true;
      }

    });
    console.log(this.data);
    this.arrobj.next(this.data);
  }

}