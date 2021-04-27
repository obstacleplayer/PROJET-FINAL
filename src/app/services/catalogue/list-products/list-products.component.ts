import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../../../models/product.model';
import { ListProductsService } from './list-products.service';
import { AddProduct } from '../../../../../shared/action/AddProduct.action';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})

export class ListProductsComponent implements OnInit {
  public products: Produit[] = [];
  public productsFilter: Produit[] = [];
  public isEmpty: boolean = false;
  @Input() filter: String;

  constructor(
    public listProductsService: ListProductsService,
    private store: Store
  ) {}

  ngOnInit() {
    this.listProductsService.getProducts().subscribe((response) => {
      this.products = response;
      this.productsFilter = response;
      console.log(this.products);
    });
  }

  searchByName(filters: string) {
    this.filter = filters;
    this.isEmpty = false;
    this.productsFilter = [];
    if (this.filter === '') {
      this.productsFilter = this.products;
      return;
    }
    for (let i = 0; i < this.products.length; i++) {
      if (
        this.products[i].name
          .toLowerCase()
          .includes(this.filter.toLowerCase().trim())
      ) {
        this.productsFilter.push(this.products[i]);
      }
    }

    if (this.productsFilter.length == 0) {
      this.isEmpty = true;
    }
  }

  addClick(id, name, price, size, category, source) {
    this.addProduct(id, name, price, size, category, source);
  }

  private addProduct(id, name, price, size, category, source) {
    this.store.dispatch(
      new AddProduct({ id, name, price, size, category, source })
    );
  }
}
