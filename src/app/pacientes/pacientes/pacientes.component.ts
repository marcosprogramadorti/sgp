import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../pacientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  pacientes: any[];
  pagina:number;
  inscricao: Subscription
  constructor(
     private pacientesService: PacientesService
    ,private route: ActivatedRoute
    ,private router: Router
  ) { }

  ngOnInit() {
    this.pacientes = this.pacientesService.getPacientes();
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams:any) =>{
        this.pagina = queryParams['pagina'];
      }
    );
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
  proximaPagina(){
    // this.pagina++;
    this.router.navigate(['/pacientes'],{queryParams:{'pagina':++this.pagina}});
  }

}
