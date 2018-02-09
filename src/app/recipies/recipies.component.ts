import { Recipie } from './recipie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  selectedRecipie: Recipie;
  constructor() { }

  ngOnInit() {
  }
}
