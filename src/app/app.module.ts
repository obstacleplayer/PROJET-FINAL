import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasketState } from '../../shared/states/basket.state';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AptHttpInterceptor } from '../apt-http.interceptor';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./services/client-account/client-account.module').then(
        (i) => i.ClientAccountModule
      ),
  },
  {
    path: 'catalogue',
    loadChildren: () =>
      import('./services/catalogue/catalogue.module').then(
        (i) => i.CatalogueModule
      ),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'panier',
    loadChildren: () =>
      import('./services/basket/basket.module').then((i) => i.BasketModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TetiereComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot([BasketState]),
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AptHttpInterceptor, multi: true },
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
