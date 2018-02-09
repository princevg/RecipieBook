import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipie } from './../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  @Output() recipieWasSelected = new EventEmitter<Recipie>();
  recipies: Recipie[] = [
    new Recipie('A test recipie', 'This is simply a test', '../../../assets/images/recipie1.jpeg'),
    new Recipie('A test recipie', 'This is simply a test', '../../../assets/images/recipie1.jpeg'),
    new Recipie('A test recipie', 'This is simply a test', '../../../assets/images/recipie1.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipieSelected (recipie: Recipie) {
      this.recipieWasSelected.emit(recipie);
  }
}
