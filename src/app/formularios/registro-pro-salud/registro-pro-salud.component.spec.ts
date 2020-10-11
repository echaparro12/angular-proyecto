import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProSaludComponent } from './registro-pro-salud.component';

describe('RegistroProSaludComponent', () => {
  let component: RegistroProSaludComponent;
  let fixture: ComponentFixture<RegistroProSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroProSaludComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroProSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
