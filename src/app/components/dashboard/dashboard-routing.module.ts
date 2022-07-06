import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InformacionComponent } from './informacion/informacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  //objeto de rutas, creo rutas hijas.
  {path: '', component:DashboardComponent, children: [
    {path:'inicio',component:InicioComponent},
    {path:'productos', component:ProductosComponent},
    {path:'informacion', component:InformacionComponent},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
