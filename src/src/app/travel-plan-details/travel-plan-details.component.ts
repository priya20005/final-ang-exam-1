import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelPlanService } from '../travel-plan.service';

@Component({
  selector: 'app-travel-plan-details',
  standalone: true,
  imports: [],
  templateUrl: './travel-plan-details.component.html',
  styleUrl: './travel-plan-details.component.css',
})
export class TravelPlanDetailsComponent implements OnInit {
  travelPlan: any;
  constructor(
    private route: ActivatedRoute,
    private travelPlanService: TravelPlanService
  ) {}
  ngOnInit(): void {
    const planId = +this.route.snapshot.paramMap.get('id');
    this.travelPlanService.getTravelPlanById(planId).subscribe((travelPlan) => {
      this.travelPlan = travelPlan;
    });
  }
}
