import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BregistrationComponent } from './bregistration.component';

describe('BregistrationComponent', () => {
  let component: BregistrationComponent;
  let fixture: ComponentFixture<BregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
