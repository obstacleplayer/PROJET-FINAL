import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListProductsService } from '../services/catalogue/list-products/list-products.service';
import { FormsLoginService } from '../forms-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: string = '';
  password: string = '';

  constructor(private formsLoginService: FormsLoginService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.login + ' ' + this.password);
    this.formsLoginService
      .login(this.login, this.password)
      .subscribe((flux) => console.log(flux));
  }
}
