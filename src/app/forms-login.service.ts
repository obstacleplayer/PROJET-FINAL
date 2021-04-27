import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsLoginService {
  constructor(private httpClient: HttpClient) {}

  public login(login: string, password: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient.post<any>(
      '/login',
      { login: login, password: password },
      httpOptions
    );
  }
}
