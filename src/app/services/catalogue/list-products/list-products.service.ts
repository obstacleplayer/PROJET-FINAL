import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../../../../models/product.model';
import { environment } from '../../../../environments/environment';
import {ClientModel} from "../../../../models/client.model";


const httpOptions = {
  headers : new HttpHeaders( {
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root',
})
export class ListProductsService {
  constructor(private httpClient: HttpClient) {}

  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();


  getProducts(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(environment.product);
  }

  getClient() : Observable<ClientModel>
  {
    const params = new HttpParams().set('id', sessionStorage.getItem("id"));
    return this.httpClient.get<ClientModel>(environment.getClient, {params});
  }


  addClient(client : ClientModel) : Observable<ClientModel> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    let newClient = this.httpClient
      .post<ClientModel>(environment.createClient, client, httpOptions);
    newClient.subscribe(item => { sessionStorage.setItem("id", ""+item.id);
      this.fireIsLoggedIn.emit("connected");});
    return newClient;
  }


}
