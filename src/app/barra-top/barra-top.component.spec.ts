import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraTopComponent } from './barra-top.component';

describe('BarraTopComponent', () => {
  let component: BarraTopComponent;
  let fixture: ComponentFixture<BarraTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
