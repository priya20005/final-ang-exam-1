import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPlanDetailsComponent } from './travel-plan-details.component';

describe('TravelPlanDetailsComponent', () => {
  let component: TravelPlanDetailsComponent;
  let fixture: ComponentFixture<TravelPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelPlanDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
