import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  apidata: any;
  products: any;
  public data: any;
  public arrobj: Subject<any> = new Subject<any>();
  constructor(public http : HttpClient ) { }


  getproducts(): Observable<any> {
    return this.http.get<any>('https://tingo-b5483.firebaseio.com/products.json');
  }
  product(){
    // this.http.get<any>('https://tingo-b5483.firebaseio.com/products.json').pipe().subscribe(value => {
    //   this.apidata = value;
    //   //  console.log("keys are here ", Object.keys(this.apidata));
    //   this.products = Object.keys(this.apidata).map(apidata => {
    //     return this.apidata[apidata];
    //   });
    // });
    this.getproducts().pipe()
    .subscribe(value => {
      this.apidata = value;
      //  console.log("leys are here ", Object.keys(this.apidata));
      this.products = Object.keys(this.apidata).map(apidata => {
        return this.apidata[apidata];
      });
     //console.log(this.products);
    });
    
  }
  getdata() {
    return this.products;
  }
setData(filtervalue) {
    this.products = this.products.filter((products) => {
      if ((filtervalue.Electronics ? this.products.Electronics == filtervalue.Electronics : true) && (filtervalue.Clothing ? this.products.Clothing == filtervalue.Clothing : true) && (filtervalue.Books ? this.products.Books== filtervalue.Books : true)) {
        return true;
      }

    });
    console.log(this.products);
    this.arrobj.next(this.products);
  }
  getusers(): Observable<any> {
    return this.http.get<any>('https://tingo-b5483.firebaseio.com/users.json');
  }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization': 'my-auth-token'
    })
  };

  adduser(user:any): Observable<any> {
    return this.http.post<any>('https://tingo-b5483.firebaseio.com/users.json', user,this.httpOptions);
  }

}

