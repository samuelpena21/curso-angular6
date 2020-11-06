import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTravelDestinationComponent } from './form-travel-destination.component';

describe('FormTravelDestinationComponent', () => {
  let component: FormTravelDestinationComponent;
  let fixture: ComponentFixture<FormTravelDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTravelDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTravelDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
