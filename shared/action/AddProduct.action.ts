import {Product} from "../model/product.model";

export class AddProduct {
  static readonly type = '[Produit] AJOUTER';

  constructor(public  payload: Product) {
  }
}
