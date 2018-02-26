import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PacientesGuard } from './guards/pacientes.guard';
// import { PacientesComponent } from './pacientes/pacientes/pacientes.component';
// import { PacienteDetalheComponent } from './pacientes/paciente-detalhe/paciente-detalhe.component';
// import { PacienteNaoEncontradoComponent } from './pacientes/paciente-nao-encontrado/paciente-nao-encontrado.component';



const appRoutes: Routes = [
    {   path: 'pacientes', 
        loadChildren:'app/pacientes/pacientes.module#PacientesModule',
        canActivate:[AuthGuard],
        canActivateChild:[PacientesGuard]    
    },
    {   path: 'login', 
        component: LoginComponent
    },
    // { path: 'pacientes', component: PacientesComponent },
    // { path: 'paciente/:id', component: PacienteDetalheComponent },
    // { path: 'pacienteNaoEncontrado', component: PacienteNaoEncontradoComponent },
    {   path: '', 
        component: HomeComponent,
        canActivate:[AuthGuard] 
    }
];

@NgModule({
     imports:[RouterModule.forRoot(appRoutes)]
    ,exports:[RouterModule]
})
export class AppRoutingModule{

}