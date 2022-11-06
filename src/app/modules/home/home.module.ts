import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, OrderModule],
})
export class HomeModule {}
