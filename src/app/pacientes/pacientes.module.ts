import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteDetalheComponent } from './paciente-detalhe/paciente-detalhe.component';

// import { routing } from '../app.router';
import { PacienteNaoEncontradoComponent } from './paciente-nao-encontrado/paciente-nao-encontrado.component';
import { AppRoutingModule } from '../app.routing.module';
import { PacientesRoutingModule } from './pacientes.routing.module';


@NgModule({
  imports: [
    CommonModule,
    // routing
    //AppRoutingModule
    PacientesRoutingModule
  ],
  declarations: [
    PacientesComponent,
    PacienteDetalheComponent,
    PacienteNaoEncontradoComponent

  ],
  exports:[
    // PacientesComponent,
    // PacienteDetalheComponent
  ]
})
export class PacientesModule { }
