import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { BarraTopComponent } from './barra-top/barra-top.component';
import { BarraMenuTopComponent } from './barra-menu-top/barra-menu-top.component';
import { LoginComponent } from './login/login.component';

// import { PacientesModule } from './pacientes/pacientes.module';
import { PacientesService } from './pacientes/pacientes.service';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PacientesGuard } from './guards/pacientes.guard';


// import { routing } from './app.router';




@NgModule({
  declarations: [
    AppComponent,
    BarraTopComponent,
    BarraMenuTopComponent,
    LoginComponent,
    HomeComponent
   
    
    
  ],
  imports: [


  BrowserModule,
  FormsModule,
    // routing,
    // PacientesModule,
    AppRoutingModule
  ],
  providers: [PacientesService, AuthService, AuthGuard, PacientesGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
