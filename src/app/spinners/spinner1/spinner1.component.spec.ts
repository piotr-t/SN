import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spinner1Component } from './spinner1.component';

describe('Spinner1Component', () => {
  let component: Spinner1Component;
  let fixture: ComponentFixture<Spinner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Spinner1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spinner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
