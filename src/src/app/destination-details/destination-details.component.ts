import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationServices } from '../destination.service';

@Component({
  selector: 'app-destination-details',
  standalone: true,
  imports: [],
  templateUrl: './destination-details.component.html',
  styleUrl: './destination-details.component.css',
})
export class DestinationDetailsComponent implements OnInit {
  destination: any;
  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService
  ) {}
  ngOnInit(): void {
    const destinationId = +this.route.snapshot.paramMap.get('id');
    this.destinationService
      .getDestinationById(destinationId)
      .subscribe((destination) => {
        this.destination = destinationId;
      });
  }
}
