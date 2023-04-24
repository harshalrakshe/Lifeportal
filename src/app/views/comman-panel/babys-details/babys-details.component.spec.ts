import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysDetailsComponent } from './babys-details.component';

describe('BabysDetailsComponent', () => {
  let component: BabysDetailsComponent;
  let fixture: ComponentFixture<BabysDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabysDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabysDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
