import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../../../../models/client.model';
import { Data } from '../form/provider';
import {ListProductsService} from "../../catalogue/list-products/list-products.service";

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css'],
})
export class RecapComponent implements OnInit {
  client: ClientModel;

  constructor(public service : ListProductsService) {
    this.service.getClient().subscribe(item => this.client = item);
  }

  ngOnInit(){
    this.service.getClient().subscribe(item => this.client = item);
  }
}
