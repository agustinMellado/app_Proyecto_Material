import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { SharedModule } from '../shared/shared.module';
import { InformacionComponent } from './informacion/informacion.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    InicioComponent,
    ProductosComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
