import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PacientesComponent } from './pacientes/pacientes/pacientes.component';
import { PacienteDetalheComponent } from './pacientes/paciente-detalhe/paciente-detalhe.component';
import { PacienteNaoEncontradoComponent } from './pacientes/paciente-nao-encontrado/paciente-nao-encontrado.component';


const APP_ROUTES: Routes = [
    
    { path: 'login', component: LoginComponent },
    { path: 'pacientes', component: PacientesComponent },
    { path: 'paciente/:id', component: PacienteDetalheComponent },
    { path: 'pacienteNaoEncontrado', component: PacienteNaoEncontradoComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);