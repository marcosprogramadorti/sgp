import { Injectable } from '@angular/core';

@Injectable()
export class PacientesService {
  getPacientes(){
    return [
      {id:1, nome: 'Marcos'},
      {id:2, nome: 'Maria'},
      {id:3, nome: 'Marly'}
    ] 
  }
  getPaciente(id: number){
    let cursos = this.getPacientes();
    for (let i=0; i< cursos.length; i++ ){
      let curso = cursos[i];
      if (curso.id == id){
        return curso;
      }  
    }
    return null;
  }
  constructor() {}

}
