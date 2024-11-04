import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyLoadingComponent } from './lazy-loading.component';
@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }