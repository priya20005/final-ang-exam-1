import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DestinationService} from '../destination.service';

@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent implements OnInit {
  destinations: any[];
  constructor(private destinationService:DestinationService,private router:Router){ }
  ngOnInit():void{
    this.destinationService.getDestinations().subscribe(destinations=>{
      this.destinations=descriptions;
    });
  }
  viewDetails(descriptionId:number): void{
    this.router.navigate(['/destinations',destinationId]);
  }

}

