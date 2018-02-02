import { Component } from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {Http} from '@angular/http';

import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

users = [];

constructor(private http: Http){

    http.get('https://vast-mesa-68588.herokuapp.com//item/filter?tags=sofa')
    .toPromise()
    .then((data) => {data.json()}
    )
    .catch((err) => {
      console.log(err);
    })

}
}