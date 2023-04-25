import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregitrationComponent } from './pregitration.component';

describe('PregitrationComponent', () => {
  let component: PregitrationComponent;
  let fixture: ComponentFixture<PregitrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregitrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
