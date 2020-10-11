import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinessomosComponent } from './quinessomos.component';

describe('QuinessomosComponent', () => {
  let component: QuinessomosComponent;
  let fixture: ComponentFixture<QuinessomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinessomosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinessomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
