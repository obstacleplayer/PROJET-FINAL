import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { DetailProductComponent } from './detail-product/detail-product/detail-product.component';
import { FilterProductsComponent } from './filter-products/filter-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Data } from '../client-account/form/provider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./detail-product/detail-product.module').then(
        (i) => i.DetailProductModule
      ),
  },
];
@NgModule({
  declarations: [ListProductsComponent, FilterProductsComponent],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [RouterModule],
  providers: [Data],
})
export class CatalogueModule {}
