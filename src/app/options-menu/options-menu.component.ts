import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.css']
})
export class OptionsMenuComponent implements OnInit {


  category = ['Tables', ' Chairs', ' Lighting'];	

   area = ['Indoor', 'Outdoor'];

   style = ['Traditional', 'Contemporary', 'Transitional'];

    manufacturer = ['Gregorius Pineo', 'Quintus', 'David Iatesta'];

     size = ['Small', 'Medium', 'Large'];
  constructor() { }

  ngOnInit() {
  }

}
