import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RecapComponent } from './recap/recap.component';
import { PhonePipe } from '../../phone.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Data } from './form/provider';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [{ path: 'recap', component: RecapComponent }],
  },
];

@NgModule({
  declarations: [FormComponent, RecapComponent, PhonePipe],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [RouterModule],
  providers: [Data],
})
export class ClientAccountModule {}
