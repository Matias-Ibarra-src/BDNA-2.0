import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { DetalleScreenComponent } from './screens/detalle-screen/detalle-screen.component';
import { ReclamosScreenComponent } from './screens/reclamos-screen/reclamos-screen.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    DetalleScreenComponent,
    ReclamosScreenComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
