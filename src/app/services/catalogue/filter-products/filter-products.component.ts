import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css'],
})
export class FilterProductsComponent implements OnInit {
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  filterName: string = '';

  constructor() {}

  ngOnInit(): void {}

  filterByName(filter) {
    this.filter.emit(this.filterName);
  }
}
