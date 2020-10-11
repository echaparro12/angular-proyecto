import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPersonalAdministrativoComponent } from './registro-personal-administrativo.component';

describe('RegistroPersonalAdministrativoComponent', () => {
  let component: RegistroPersonalAdministrativoComponent;
  let fixture: ComponentFixture<RegistroPersonalAdministrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPersonalAdministrativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPersonalAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
