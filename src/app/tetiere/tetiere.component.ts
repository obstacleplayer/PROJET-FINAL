import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css'],
})
export class TetiereComponent implements OnInit {
  numberProduct: number;

  constructor(private store: Store) {
    this.store
      .select((state) => state.basket.basket)
      .subscribe((i) => (this.numberProduct = i.length));
  }

  ngOnInit(): void {}
}
