import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraMenuTopComponent } from './barra-menu-top.component';

describe('BarraMenuTopComponent', () => {
  let component: BarraMenuTopComponent;
  let fixture: ComponentFixture<BarraMenuTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraMenuTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraMenuTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
