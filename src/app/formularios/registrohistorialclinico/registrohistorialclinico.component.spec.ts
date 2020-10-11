import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrohistorialclinicoComponent } from './registrohistorialclinico.component';

describe('RegistrohistorialclinicoComponent', () => {
  let component: RegistrohistorialclinicoComponent;
  let fixture: ComponentFixture<RegistrohistorialclinicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrohistorialclinicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrohistorialclinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
