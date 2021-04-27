import {Product} from "../model/product.model";

export class DelProduct {
  static readonly type = '[Produit] supprimer';

  constructor(public payload: Product) {
  }
}
