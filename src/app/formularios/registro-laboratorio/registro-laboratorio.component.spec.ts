import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLaboratorioComponent } from './registro-laboratorio.component';

describe('RegistroLaboratorioComponent', () => {
  let component: RegistroLaboratorioComponent;
  let fixture: ComponentFixture<RegistroLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroLaboratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
