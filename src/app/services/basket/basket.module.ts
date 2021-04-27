import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { BasketComponent } from './basket/basket.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



const routes: Routes = [{
  path: '',
  component: BasketComponent
}]


@NgModule({
  declarations: [BasketComponent],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class BasketModule { }
