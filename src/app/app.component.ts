import { Component } from '@angular/core';
import {Quote} from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]= [
{id:1, quote:'Watch finding Nemo', author:'Baba Tunde'},
{id:2, quote:'Buy Cookies', author:'Mzee'},
{id:3, quote:'Get new Phone Case', author:'Yoda'},
{id:4, quote:'Get Dog Food',author:'Hans'},
{id:5, quote:'Solve math homework',author:'Luke Sky Walker'},
{id:6, quote:'Plot my world domination plan',author:'Darth Vader'}

  ];


}