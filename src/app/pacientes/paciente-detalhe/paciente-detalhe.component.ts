import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PacientesService } from './../pacientes.service';

@Component({
  selector: 'app-paciente-detalhe',
  templateUrl: './paciente-detalhe.component.html',
  styleUrls: ['./paciente-detalhe.component.css']
})
export class PacienteDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  paciente:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacientesService: PacientesService 
  ) {
    // this.id = route.snapshot.params['id'];
    // console.log(this.route);
   }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any)=>{
        this.id =  params['id'];
        this.paciente = this.pacientesService.getPaciente(this.id);

        if (this.paciente == null ){
          this.router.navigate(['pacientes/pacienteNaoEncontrado']);
        }
      }
    );

  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
