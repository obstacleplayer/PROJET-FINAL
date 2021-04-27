import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { ListProductsService } from '../../list-products/list-products.service';
import { AddProduct } from '../../../../../../shared/action/AddProduct.action';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  public selectProduct: Produit;
  id: string = '';
  name: string = '';
  price: number;
  size: string = '';
  category: string = '';
  source: string = '';

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    public listeProductService: ListProductsService
  ) {
    let id = this.route.snapshot.paramMap.get('id');
    this.listeProductService.getProducts().subscribe((item) => {
      this.selectProduct = item.find((i) => i.id === id);
    });
  }

  ngOnInit() {}

  addClick(id, name, price, size, category, source) {
    this.addProduct(id, name, price, size, category, source);
  }

  private addProduct(id, name, price, size, category, source) {
    this.store.dispatch(
      new AddProduct({ id, name, price, size, category, source })
    );
  }
}
