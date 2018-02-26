import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteNaoEncontradoComponent } from './paciente-nao-encontrado.component';

describe('PacienteNaoEncontradoComponent', () => {
  let component: PacienteNaoEncontradoComponent;
  let fixture: ComponentFixture<PacienteNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteNaoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
