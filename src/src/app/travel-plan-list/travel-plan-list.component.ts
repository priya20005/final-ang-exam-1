import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelPlanService } from '../travel-plan.service';

@Component({
  selector: 'app-travel-plan-list',
  standalone: true,
  imports: [],
  templateUrl: './travel-plan-list.component.html',
  styleUrl: './travel-plan-list.component.css',
})
export class TravelPlanListComponent implements OnInit {
  travelplans: any[];
  constructor(privatetravelPlanService: TravelPlanService, private Router) {}
  ngOnInit(): void {
    this.travelPlanService.getTravelPlans().subscribe((travelPlans) => {
      this.travelPlans = travelPlans;
    });
  }
  viewPlanDetails(planId: number): void {
    this.Router.navigate(['/travel-plans', plantId]);
  }
}
