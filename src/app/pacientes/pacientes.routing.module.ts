import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';



import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteDetalheComponent } from './paciente-detalhe/paciente-detalhe.component';
import { PacienteNaoEncontradoComponent } from './paciente-nao-encontrado/paciente-nao-encontrado.component';



const pacientesRoutes: Routes = [
    
    { path: '', component: PacientesComponent },
    { path: 'pacienteNaoEncontrado', component: PacienteNaoEncontradoComponent },
    { path: ':id', component: PacienteDetalheComponent }
    
    // { path: 'pacientes', component: PacientesComponent },
    // { path: 'paciente/:id', component: PacienteDetalheComponent },
    // { path: 'pacienteNaoEncontrado', component: PacienteNaoEncontradoComponent },
   
];

@NgModule({
     imports:[RouterModule.forChild(pacientesRoutes)]
    ,exports:[RouterModule]
})
export class PacientesRoutingModule{

}