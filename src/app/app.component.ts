import { Component } from '@angular/core';
import {arr} from './jsondata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nicobar';
  jsonobj = arr;
}
