import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { ClientModel } from '../../../../models/client.model';
import {ListProductsService} from "../../catalogue/list-products/list-products.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  isSend = false;
  form: FormGroup;
  client : ClientModel;

  constructor(private router: Router, private route: ActivatedRoute, private service: ListProductsService) {
    this.form = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]*$'),
      ]),
      address: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*$'),
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]*$'),
      ]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{10}$'),
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
      ]),
      civilite: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]*$'),
      ]),
      login: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]*$'),
      ]),
      country: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]*$'),
      ]),
    });
  }

  ngOnInit() {
    this.client = new ClientModel();
  }

  sumbit() {


    this.client.firstname = this.form.controls.firstname.value;
    this.client.lastname = this.form.controls.lastname.value;
    this.client.address = this.form.controls.address.value;
    this.client.postalCode = this.form.controls.postalCode.value;
    this.client.city = this.form.controls.city.value;
    this.client.tel = this.form.controls.tel.value;
    this.client.mail = this.form.controls.mail.value;
    this.client.civility = this.form.controls.civilite.value;
    this.client.password = this.form.controls.password.value;
    this.client.login = this.form.controls.login.value;
    this.client.country = this.form.controls.country.value;

    this.service.addClient(this.client).subscribe(item => this.router.navigate(['recap'], {relativeTo: this.route}));
    console.log(this.form);
  }
}
